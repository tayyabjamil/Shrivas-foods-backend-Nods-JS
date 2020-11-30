const mongoose = require('mongoose')
const Grid = require('gridfs-stream');
const express = require('express')
var path = require("path");
const PORT = process.env.PORT || 5000
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
// const dbpath = 'mongodb://localhost:27017/Nodejs'
// mongoose.connect('mongodb+srv://tayyab:tayyab@123@cluster0.wzfwv.mongodb.net/shirivasFoods', 
// {useNewUrlParser: true ,useCreateIndex:true,useFindAndModify:false}).then(() => {
// console.log("Connected to Database");
// }).catch((err) => {  
//     console.log("Not Connected to Database ERROR! ", err);
// });
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