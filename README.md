### SETUP

I was trying to keep this really simple

To start the database open a terminal and run

    ```bash
        docker-compose up
    ```

To build and start the app open an other terminal and run

    ```bash
        npm install -g dotenv-cli

        npm install

        npm run migrate

        npm run build

        npm run import

        npm run start
    ```

This will run the import and the `searchTerm` function once

After the first steps, the `searchTerm` function can be runned with

    ```bash
        npm run start
    ```

### Improvements

    Smileys and special characters might cause problems in the database query, so the process function might need to handle these cases as well.