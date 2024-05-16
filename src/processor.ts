import { prisma } from './prisma.client'
import { Sql } from './generated/client/runtime/library';
import { DataType, MappedDataType, DataTypeWithSource, DataMapType } from './models/types';

class Processor {
    private static processInput(searchTerm: string) {
        return searchTerm.split(' ').reduce<string>((list, chunk) => {
            if (chunk.length < 3) {
                return list
            }
    
            return `${list}${list.length === 0 ? '' : ', '}'%${chunk.toLowerCase()}%'`
        }, '');
    }

    private static async executeQuery(processedInput: string) {
        const sql = `
            SELECT *, 'brands' AS source FROM dbo.brands WHERE LOWER(name) LIKE ANY (array[${processedInput}])
            UNION ALL
            SELECT *, 'cities' AS source FROM dbo.cities WHERE LOWER(name) LIKE ANY (array[${processedInput}])
            union all
            SELECT *, 'dishtypes' AS source FROM dbo.dishtypes WHERE LOWER(name) LIKE ANY (array[${processedInput}])
            union all
            SELECT *, 'diets' AS source FROM dbo.diets WHERE LOWER(name) LIKE ANY (array[${processedInput}]);
        `;

        return await prisma.$queryRaw<DataTypeWithSource[]>(new Sql([sql], []));
    }

    private static convertResponse(inputArray: DataTypeWithSource[]) {
        const resultMap = inputArray.reduce<MappedDataType>((map, array) => {
            const { source, ...rest } = array;

            return {
                ...map,
                [source]: [...map[source], rest]
            }
        }, {
            brands: [],
            cities: [],
            diets: [],
            dishtypes: []
        });

        return this.createCombinations(resultMap);
    }

    private static createCombinations(data: MappedDataType) {
        const results: Partial<DataMapType>[] = [];
        const keys = Object.keys(data);

        function recursiveHelper(currentCombination: Partial<DataMapType>, remainingKeys: string[]) {
            if (remainingKeys.length === 0) {
                results.push(currentCombination);
                return;
            }
    
            const nextKey = remainingKeys[0];
            const nextValues: DataType[] = data[nextKey];
    
            for (const value of nextValues) {
                const newCombination = { ...currentCombination, [nextKey]: value };
                recursiveHelper(newCombination, remainingKeys.slice(1));
            }
        }
    
        recursiveHelper({}, keys);
        return results;
    }

    public static async searchTerm(searchTerm: string) {
        const processedInput = this.processInput(searchTerm);

        const results = await this.executeQuery(processedInput)
    
        const convertedResult = this.convertResponse(results);

        return convertedResult;
    }    
}

export default Processor