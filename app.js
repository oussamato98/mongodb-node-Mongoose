
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsdb",{ useNewUrlParser: true});


// On cree une schema pour montrer comment les donnees d une collection particuliere sont structurees
const fruitSchema = new mongoose.Schema({
  name: String,
  rating : Number ,
  review : String
});


// we use the schema to create a Mongoose model. 
const Fruit = mongoose.model("Fruit", fruitSchema);

// create a new Fruit Document : 
const fruit = new Fruit({
    name:"Apple",
    rating:7,
    review:"pretty solid out sl"
});

fruit.save();












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