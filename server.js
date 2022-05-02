const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://reviewapp2022:qwer1234@reviewappdb.lma2n.mongodb.net/reviewapp_db?retryWrites=true&w=majority';
const cookieParser = require('cookie-parser');

const entryRouter = require('./routes/entry');
const reviewRouter = require('./routes/review');
const userRouter = require('./routes/user');

mongoose.connect(uri, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

const cors = require('cors');
// const auth_middleware = require('./routes/middlware/auth_middleware');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());//cookie-parser is the middleware that lets directly intercept and modify a request coming to our Express/Node app.

app.use(cors({
  origin: '*',
}));

// app.use(auth_middleware);
// Routers
app.use('/entry', entryRouter);
app.use('/review', reviewRouter);
app.use('/user', userRouter);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Starting server');
});

// const postRouter = require('./routes/posts');

// MongoDB insert demo
// const { MongoClient, ServerApiVersion } = require('mongodb');

// const client = new MongoClient(uri, { useNewUrlParser: true, 
//   useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

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

//------insert a document into the database------
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("insertDB");
//     const haiku = database.collection("haiku");
//     // create a document to insert
//     const doc = {
//       title: "Record of a Shriveled Datum",
//       content: "No bytes, no problem. Just insert a document, in MongoDB",
//     }
//     const result = await haiku.insertOne(doc);
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);



//------find a document from database-----
// async function run() {
//   try {
//     await client.connect();
//     console.log("connected");
//     const database = client.db("insertDB");
//     const haiku = database.collection("haiku");
//     // Query for a entry that has the title 'Record of a Shriveled Datum'
//     const query = { title: "Record of a Shriveled Datum" };//if multiple matches - return first one?
//     const entry = await haiku.findOne(query);
//     // since this method returns the matched document, not a cursor, print it directly
//     console.log("successfully findOne!!!!!!!!!!!!");
//     console.log(entry);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);


//------find multiple documents from database------
// async function run() {
//   try {
//     await client.connect();
//     console.log("connected");
//     const database = client.db("insertDB");
//     const haiku = database.collection("haiku");
//     // Query for a entry that has the title 'Record of a Shriveled Datum'
//     const query = { title: "Record of a Shriveled Datum" };//if multiple matches - return first one?
//     const cursor = haiku.find(query);//no await here
//     //if no documents match the query, find() returns an empty cursor - print a message if no documents were found
//     if ((await cursor.count()) === 0) {
//       console.log("No documents found!");
//     }
//     // replace console.dir with your callback to access individual elements
//     await cursor.forEach(console.dir);
//     // since this method returns the matched document, not a cursor, print it directly
//     console.log("successfully find all matched documents");
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);


//------update a document------
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("insertDB");
//     const haiku = database.collection("haiku");
//     // create a filter for a document to update
//     const filter = { title: "Record of a Shriveled Datum" };
//     // this option instructs the method to create a document if no documents match the filter
//     const options = { upsert: true };
//     // create a document that sets the plot of the movie
//     const updateDoc = {
//       $set: {
//         title: 'updated title'
//       },
//     };
//     const result = await haiku.updateOne(filter, updateDoc, options);
//     console.log(
//       `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
//     );
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

//------delete a document------
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("insertDB");
//     const haiku = database.collection("haiku");
//     // Query for a entry that has title "updated title"
//     const query = { title: "updated title" };
//     const result = await haiku.deleteOne(query);
//     if (result.deletedCount === 1) {
//       console.log("Successfully deleted one document.");
//     } else {
//       console.log("No documents matched the query. Deleted 0 documents.");
//     }
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);