import { parse } from 'csv-parse'
import { join } from 'path'
import { createReadStream } from 'fs'
import { prisma } from './prisma.client';
import { DataType, TableNames } from './models/types';

class Importer {
    constructor() {
        this.importData('diets');
        this.importData('brands');
        this.importData('dishtypes');
        this.importData('cities');
    }

    private importData(type: TableNames) {
        const csvContent: DataType[] = [];
        createReadStream(join(process.cwd(), `${type}-${type}.csv`))
            .pipe(parse({ delimiter: ',' }))
            .on('data', (row) => {
                csvContent.push({
                    id: Number(row[0]),
                    name: row[1]
                });
            })
            .on('end', async () => {
                const createOptions = {
                    data: csvContent.splice(1, csvContent.length - 1),
                    skipDuplicates: true,
                }
    
                switch(type) {
                    case 'brands':
                        await prisma.brands.createMany(createOptions);
                        break;
                    case 'cities':
                        await prisma.cities.createMany(createOptions);
                        break;
                    case 'diets':
                        await prisma.diets.createMany(createOptions);
                        break;
                    case 'dishtypes':
                        await prisma.dishtypes.createMany(createOptions);
                        break;
                }
            });
    }
}

new Importer();
