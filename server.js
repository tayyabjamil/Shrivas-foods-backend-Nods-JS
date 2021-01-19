const mongoose = require('mongoose')
const Grid = require('gridfs-stream');
const app = require('./app')


const PORT = process.env.PORT || 8000
app.listen(port , ()=>{
    app.listen(PORT, () => console.log(`Listening on ${PORT}`))
})

const dbpath = "mongodb+srv://tayyabjamil:tayyabjamil123@cluster0.wzfwv.mongodb.net/shirivasFoods";
const conn = mongoose.createConnection(dbpath);

// Init gfs
let gfs;
conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
  }).catch(err =>{
        console.log('err' + err)
  });
  const mongo = mongoose.connect(dbpath, {useNewUrlParser: true ,
    useUnifiedTopology:true,useCreateIndex:true});
mongo.then(() => {
console.log('Database connected');

}).catch((err) => {
console.log('err', err);
});