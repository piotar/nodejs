require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

// wprowadzamy 'connection string' z naszej zmiennej środowiskowej zapisanej w pliku .env
const uri = process.env.MONGODB_CONNECTION;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// łączymy się z bazą danych
client.connect(async err => {
    // wybieramy odpowiednią bazę danych oraz kolekcję
    const collection = client.db("todo").collection("tasks");

    // pobieramy wszystkie elementy kolekcji 'tasks'
    const result = await collection.find().toArray();
    console.log(result);

    client.close();
});