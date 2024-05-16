import Processor from './processor';

// const inputString = 'Coffee with sugar'
// const inputString = 'Veg sushi London'
// const inputString = 'London'
const inputString = 'McDonald'

const searchTerm = async (searchTerm: string) => {
    const results = await Processor.searchTerm(searchTerm);

    console.log(results);
}

searchTerm(inputString);