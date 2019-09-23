const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.MONGO_USER + ':' || ''}${process.env.MONGO_PASS + '@' || ''}${process.env.MONGO_HOST + ':' || 'localhost:'}${process.env.MONGO_PORT || '27017'}/${process.env.MONGO_DB || 'whatsapp'}`, {
    useNewUrlParser: true,
    useFindAndModify: false
});

mongoose.Promise = global.Promise


module.exports = mongoose;