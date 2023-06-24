
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsdb",{ useNewUrlParser: true});


// On cree une schema pour montrer comment les donnees d une collection particuliere sont structurees
const fruitSchema = new mongoose.Schema({
  //Data Validation
  name : {
    type: String
  //  required: true
  } ,
  rating : Number ,
  review : String
});

const personSchema = new mongoose.Schema({
  name : {
    type: String
  } ,
  age : Number ,
  //Embedded document
  favouriteFruit : fruitSchema 
});



// we use the schema to create a Mongoose model. 
const Fruit = mongoose.model("Fruit", fruitSchema);
const Person= mongoose.model("Person", personSchema);


// create a new Fruit Document : 
const apple = new Fruit({
    name:"Apple",
    rating:7,
    review:"pretty solid out sl"
});
const orange = new Fruit({
  name:"orange",
  rating:4,
  review:"solid out lmsop"
});
const pin = new Fruit({
  
  rating:4,
  review:"solid out lmsop"
});

// create a new Person Document : 
const john = new Person({
  name:"john",
  age:17
});

//john.save();


// Fruit.insertMany([apple,orange]);

//pin.save();

//const code =  Fruit.find({});

// async function fetchFruits() {
//   try {
//     const fruits = await Fruit.find({});
//     mongoose.connection.close();
//     fruits.forEach(function (fruit) {
//       console.log(fruit);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

// fetchFruits();



// async function updateFruits() {
//   try {
//     const res = await Fruit.updateOne(
//       { _id: "6496f0d4d168b0859d605e06" },
//       { $set: { name: "USS Enterprise" } }
//     );
//     console.log("Modified");
//     mongoose.connection.close();

//   } catch (err) {
//     console.error(err);
//   }
// }

// updateFruits();



// async function deleteFruits() {
//   try {
//     const res = await Fruit.deleteOne({ name:"Apple" }); // returns {deletedCount: 1}
//     console.log("deleted");
//     mongoose.connection.close();

//   } catch (err) {
//     console.error(err);
//   }
// }

// deleteFruits();



// Embedding Document :

const pineApple = new Fruit({
  name:"pineApple",
  rating:7,
  review:"pretty solid out sl"
});

pineApple.save();


const david = new Person({
  name:"david",
  age:17,
  favouriteFruit : pineApple 
});

david.save();






































//         // Remplacez 'fruits' par le nom de votre collection
//         // coll pour creer une reference de la collection fruits de votre base de donnee
//         const coll = database.collection('fruits');

//         // Effectuez les opérations souhaitées sur votre base de données ici

//         // insertion 
//         const result = coll.insertMany(document);
//         const insertedCount = result.insertedCount;
//         console.log("Nombre de documents insérés : " + insertedCount);


//         // utiliser les donnes a partir notre bd in our application 
//         const cursor = coll.find();
//         for (const doc of cursor) {
//             console.log(doc);
//         }


// document = [
//     { title: 'Dangal', rating: 'Not Rated' },
//     { title: 'The Boss Baby', rating: 'PG' }
// ];