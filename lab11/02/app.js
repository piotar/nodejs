require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');

// wprowadzamy 'connection string' z naszej zmiennej środowiskowej zapisanej w pliku .env
const uri = process.env.MONGODB_CONNECTION;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// łączymy się z bazą danych
client.connect(async err => {
    // wybieramy odpowiednią bazę danych oraz kolekcję
    const collection = client.db("todo").collection("tasks");

    // pobieramy wszystkie elementy kolekcji 'tasks'
    console.log(await collection.find().toArray());

    // dodawanie do kolekcji nowego zadania
    const insertResult = await collection.insertOne({
        task: 'kupic lizaki',
        completed: false,
    });
    console.log(insertResult);


    console.log(await collection.find().toArray());


    // aktualizacja dokumentów w kolekcji
    const updateResult = await collection.updateMany({}, { $set: { createDate: '28.06.2020' } });
    console.log(updateResult);
    // await collection.updateOne({ _id: ObjectId('5ef8b39a4691151dc8df51ce') }, { $set : { completed: true }})


    console.log(await collection.find().toArray());

    // kasowanie elementów 
    const deleteResult = await collection.deleteMany({ _id: ObjectId('5ef8b39a4691151dc8df51ce') });
    console.log(deleteResult);

    console.log(await collection.find().toArray());


    client.close();
});