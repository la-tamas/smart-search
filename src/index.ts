import Processor from './processor';

const inputString = 'Veg sushi in London'

const searchTerm = async (searchTerm: string) => {
    const results = await Processor.searchTerm(searchTerm);

    console.log(results);
}

searchTerm(inputString);