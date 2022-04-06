const mongoose = require('mongoose');
const mongoAtlasUri = "mongodb+srv://zumm66:admin66@cluster0.uakvi.mongodb.net/blog?retryWrites=true&w=majority";

async function connect() {

    try {
        await mongoose.connect(mongoAtlasUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Database!');
    } catch (error) {
        console.log('Connect failure!'); 
    }

}

module.exports = { connect };
