import mongoose from "mongoose";

// Define model
// A model is a constructor function that represents a
// collention in the database
// and defines schema for each document

// Define schema
const movieSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    ratings: { type: Number, required: true , min: 1, max: 5},
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v>= 10
    },
    genre: { type: Array },
    isActive: { type: Boolean, default: true },
    comments: [
        {value: {type: String}, published: { type: Date, default: Date.now }}
    ],

})

// Create model for schema
const moviewModel = mongoose.model("Movie", movieSchema);

// const createDoc = async () => {
//     try{
//         // Creating a new Document
//         const m1 = new moviewModel({
//             name: "Avengers",
//             ratings: 5,
//             money: 1000,
//             genre: ["Action", "Adventure"],
//             isActive: true,
//             comments: [{value: "Good movie", published: new Date()}]
//         })
        
//         // Saving document
//         // const result = await m1.save();
//         // console.log(result);

//     } catch(error){
//         console.log(error);
//     }
// }


// const insertManyDocs = async () => {
//     try{
        // Creating a new Document
        // const m1 = new moviewModel({
        //     name: "Avengers",
        //     ratings: 5,
        //     money: 1000,
        //     genre: ["Action", "Adventure"],
        //     isActive: true,
        //     comments: [{value: "Good movie", published: new Date()}]
        // })
        // const m2 = new moviewModel({
        //     name: "JW C4",
        //     ratings: 4,
        //     money: 25000,
        //     genre: ["Action", "Adventure"],
        //     isActive: true,
        //     comments: [{value: "Good movie", published: new Date()}]
        // })
        // const m3 = new moviewModel({
        //     name: "Well",
        //     ratings: 3,
        //     money: 80000,
        //     genre: ["Action"],
        //     isActive: true,
        //     comments: [{value: "Good movie", published: new Date()}]
        // })
        // const m4 = new moviewModel({
        //     name: "Swell",
        //     ratings: 3,
        //     money: 900000,
        //     genre: ["Comedy", "romance"],
        //     isActive: true,
        //     comments: [{value: "Good movie", published: new Date()}]
        // })
        // const m5 = new moviewModel({
        //     name: "Hello",
        //     ratings: 4,
        //     money: 100000000,
        //     genre: ["comedy", "Adventure", "romance"],
        //     isActive: true,
        //     comments: [{value: "Not Good movie", published: new Date()}]
//         // })
//         // Saving document
//         const result = await moviewModel.insertMany([m1, m2, m3, m4, m5]);
//         console.log(result);

//     } catch(error){
//         console.log(error);
//     }
// }

// const insertManyDocs = async () => {
//     try{
        // Creating a new Document
        // const m1 = new moviewModel({
        //     name: "Avengers",
        //     ratings: 5,
        //     money: 1000,
        //     genre: ["Action", "Adventure"],
        //     isActive: true,
        //     comments: [{value: "Good movie", published: new Date()}]
        // })
        // const m2 = new moviewModel({
        //     name: "JW C4",
        //     ratings: 4,
        //     money: 25000,
        //     genre: ["Action", "Adventure"],
        //     isActive: true,
        //     comments: [{value: "Good movie", published: new Date()}]
        // })
        // const m3 = new moviewModel({
        //     name: "Well",
        //     ratings: 3,
        //     money: 80000,
        //     genre: ["Action"],
        //     isActive: true,
        //     comments: [{value: "Good movie", published: new Date()}]
        // })
        // const m4 = new moviewModel({
        //     name: "Swell",
        //     ratings: 3,
        //     money: 900000,
        //     genre: ["Comedy", "romance"],
        //     isActive: true,
        //     comments: [{value: "Good movie", published: new Date()}]
        // })
        // const m5 = new moviewModel({
        //     name: "Hello",
        //     ratings: 4,
        //     money: 100000000,
        //     genre: ["comedy", "Adventure", "romance"],
        //     isActive: true,
        //     comments: [{value: "Not Good movie", published: new Date()}]
//         // })
//         // Saving document
//         const result = await moviewModel.insertMany([m1, m2, m3, m4, m5]);
//         console.log(result);

//     } catch(error){
//         console.log(error);
//     }
// }


// Retrieving all documents
// const allDoc = async() =>{
//     try{
//         const result = await moviewModel.find(); // All Data
//         // console.log(result);
        
//         // Iterating Over
//         result.forEach(movie => {
//             console.log(movie.name);
//         });

//     }catch(error){
//         console.log(error);
//     }
// }

// const singleDoc = async() =>{
//     try{
//         // const result = await moviewModel.findById('6757343aa4488322cb7c3087', "name"); // All Data
//         // const result = await moviewModel.find({"name" : "Avengers"}); // by name
//         // const result = await moviewModel.find().limit(2).skip(2); // limitting and skipping
//         // const result = await moviewModel.find().sort({name : -1}); //sorting
//         // const result = await moviewModel.find({money : { $ne : 100000000}});
//         // const result = await moviewModel.find({
//         //     $and : [{money : 100000000}, {ratings : 4}]}); 
//         // console.log(result);
//         // // console.log(result.ratings);
//     }catch(error){
//         console.log(error);
//     }
// }

// Updating Data
// const updateById = async(id) => {
//     try{
//         const result = await moviewModel.updateOne(
//             { _id : id },
//             { $set : {name : "Avengers Infinity War"} }// Updating
//         );    
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }


// Deleting Data
const deleteById = async(id) => {
    try{
        const result = await moviewModel.deleteOne(
            { _id : id }
        );    
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

// export model
export{ deleteById }