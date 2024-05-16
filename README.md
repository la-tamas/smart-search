## Smart Search Algorithm

### SETUP

I was trying to keep this really simple.

To start the database open a terminal and run:

        docker-compose up

You may need to add the following line to your hosts file:

        0.0.0.0 db

To build and start the app open an other terminal and run:

        npm install

        npm run migrate

        npm run build

        npm run import

        npm run start

This will run the import and the `searchTerm` function once.

After the first steps, the `searchTerm` function can be runned with:

        npm run build
    
        npm run start

To run the function with different inputs, modify directly the `inputString` variable in the `index.ts` file and rerunning the above commands.

### Improvements

Smileys and special characters might cause problems in the database query, so the process function might need to handle these cases as well.

If further work would be needed on this repo a linter and some test framework should be added, however for the sake of simplicity I omitted them for now.

There is miconception of the algorithm, given that input contains `with sugar` it also finds the sugar-free options, which is not the output we want.
It should consider these modifier keywords such as with, without etc.

The algorithm returns only strict matches. For the simple input `London` it returns only the city. Ideally this should return all the possible combinations.
