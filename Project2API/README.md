# Blog API 

Blog API that uses CRUD to create, login users, delete and update blog posts. 

## Installation

Make a new folder on terminal 

```bash
mkdir BlogAPI
```
Clone repository

```bash
git clone https://github.com/erosnol/Project-2API
```
Open up Visual Studio Code
```bash
code .
```

Make sure all dependencies are up-to-date and installed.

```bash
"bcrypt": "^5.0.1",
    "dotenv": "^16.0.1",
    "ejs": "^3.1.8",
    "express": "^4.18.1",
    "express-validator": "^6.14.1",
    "helmet": "^5.1.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.3.6",
    "morgan": "^1.10.0"
```

If not, install dependencies using the following commands:
```bash
npm i bcryt
npm i dotenv 
npm i express ejs
npm i express-validator 
npm i helmet
npm i jsonwentoken
npm i mongoose
npm i morgan
```

Names of ENV Variables 
```bash
MONGO_DB
MY_SECRET_KEY
```

## Running Locally 
Check to see if you are in the /BlogAPI folder within the terminal.
```bash
pwd 
```

cd into /BlogAPI folder and run the server with nodemon 
```bash
cd BlogAPI
nodemon server.js
```
If you do not have nodemon installed run this on the terminal 
```bash
npm i nodemon 
```

## Endpoints

```bash 
app.use('/blog', blogRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)
```

## Parameters
```bash

```


## License
[MIT](https://choosealicense.com/licenses/mit/)