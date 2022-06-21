# Blog API 

Blog API that uses CRUD to create, login users, delete and update blog posts. 
https://blog-api12.herokuapp.com/

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

```bash
npm init -y 
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
## Routes 
```bash
    Endpoints, Parameters, Schema
```


```bash 
app.use('/blog', blogRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)
```

auth Router
```bash
Auth ('/auth') creates Users and Login 
 - router.post('/') : Checks users email and password with '.isEmail' & '.notEmpty.' It also creates a TOKEN for user profile.
```


blog Router
```bash
router.get('/') - finds all blogs

router.post('/') - creates a blog 

router.get('/') - find blog by id

router.put('/') - updates blog by id

router.delete('/') - deletes blog by id
```

user Router
```bash
router.post('/') - validates username, email, password with express validator. and use SALT and bcrypt to get a hashedpassword. With this, a payload exists and creates a TOKEN.
```

## Schemas
user
```bash
 `username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    age: {
        type: Number
    },

    birthday: {
        type: Date,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now()
    }`
```

blog
```bash
 `private: {
        type: Boolean,
        required: true
    },

    blog_title: {
        type: String,
        required: true
    },

    blog_content: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now()
    },

    created_by: {
        type: String,
        required: true
    }`
```

## License
[MIT](https://choosealicense.com/licenses/mit/)