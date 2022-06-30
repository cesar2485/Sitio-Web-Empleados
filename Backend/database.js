const mongoose = require('mongoose'); 
const URI = 'mongodb://127.0.0.1/empleados';
mongoose.connect(URI)
    .then((db) => console.log('DB esta conectada'))
    .catch((err) => console.error(err));

module.exports = mongoose;