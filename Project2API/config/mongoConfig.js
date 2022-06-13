const mongoose = require('mongoose')


module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI) //makes the request
        mongoose.connection // checks if we have a connection
        console.log('MongoDB Connected!');
    } catch (error) {
        console.log(error);
    }
}