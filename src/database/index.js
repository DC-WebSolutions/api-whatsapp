const mongoose = require('mongoose');
const databaseConfig = require('../config/database');

mongoose.connect(`mongodb://${databaseConfig.user + ':' || ''}${databaseConfig.pass + '@' || ''}${databaseConfig.host + ':' || 'localhost:'}${databaseConfig.port || '27017'}/${databaseConfig.db || 'whatsapp'}`, {
    useNewUrlParser: true,
    useFindAndModify: false
});

mongoose.Promise = global.Promise


module.exports = mongoose;