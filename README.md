## Smart Search Algorithm

### SETUP

I was trying to keep this really simple

To start the database open a terminal and run

        docker-compose up

To build and start the app open an other terminal and run

        npm install

        npm run migrate

        npm run build

        npm run import

        npm run start

This will run the import and the `searchTerm` function once

After the first steps, the `searchTerm` function can be runned with

    
    npm run start

### Improvements

Smileys and special characters might cause problems in the database query, so the process function might need to handle these cases as well.

If further work would be needed on this repo a linter and some test framework should be added, however for the sake of simplicity I omitted them for now.

