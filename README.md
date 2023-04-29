# Brief example of an API with Express🌐

#### About the project
In this small example we create a very simple API that allows to use the basic `HTTP` verbs to make requests on URLs using a small DB **loaded in memory**. This project focuses on business logic and data manipulation (**does not include a frontend**).
As additional data:
1. Module system used:  **` ECMAScript Modules `** ‼️
2. The VS Code extension 'Thunder Client' is used for http requests.
3. A small database in Json format in the file `bbdd.js`, this is loaded **in memory** to manipulate it by the operations.

#### Libraries
- `Nodemon`: To avoid having to restart the server every time the server is changed 
-  `Express`: This project uses the Node.js express library to handle HTTP requests and responses.
- `Dotenv` : For manipulation of environment variables (*see the .env.example file to know which environment variables are needed*)

##### How to use
1. Download or clone the project with git.
2. Create the `.env` file following the attached `.env.example file`.
3. Install the necessary libraries using the `npm install` command.
4. Run the project with the npm run dev command.
