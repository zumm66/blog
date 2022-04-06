const mongoose = require('mongoose');

const mongoAtlasUri = "mongodb+srv://zumm66:Zxx-789520@cluster0.uakvi.mongodb.net/blog?retryWrites=true&w=majority";

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose blog mindx is connected")
    );
} catch (e) {
    console.log("could not connect");
}

// async function connect() {

//     try {
//         await mongoose.connect('mongodb://localhost:27017/blog', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Connected to Database!');
//     } catch (error) {
//         console.log('Connect failure!'); 
//     }

// }

module.exports = { connect };
