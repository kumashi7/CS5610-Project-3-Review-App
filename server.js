
const express = require('express');
const app = express();
const path = require('path');
const uri = 'mongodb+srv://reviewapp2022:qwer1234@reviewappdb.lma2n.mongodb.net/reviewapp_db?retryWrites=true&w=majority';

// const postRouter = require('./routes/posts');
const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(uri, { useNewUrlParser: true, 
  useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//   const collection = client.db("test").collection("devices").insertOne({
//     item: 'canvas',
//     qty: 100,
//     tags: ['cotton'],
//     size: { h: 28, w: 35.5, uom: 'cm' }
//   });;
//   // perform actions on the collection object
//   console.log("------------success------------")
//   // client.close();
// });

async function run() {
  try {
    await client.connect();
    const database = client.db("insertDB");
    const haiku = database.collection("haiku");
    // create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Starting server');
});