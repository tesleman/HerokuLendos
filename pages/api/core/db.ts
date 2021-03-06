import mongoose from 'mongoose'


mongoose.Promise = Promise

const connect = mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

const db = mongoose.connection
async function dbConnect() {
    if (db) {
        return
    }
    else {
        connect
    }
}



db.on('error', console.error.bind(console, 'conneCTION ERROR'))

export default dbConnect
// import mongoose from 'mongoose';


