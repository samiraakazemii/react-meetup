//For API
import { MongoClient } from 'mongodb';
const Helper = async (req, res) => {
  var connectionUrl =
    'mongodb+srv://samirakazemi0203:nu6kr8uCV4r83TWz@cluster0.t9dgnb2.mongodb.net/Meetups?retryWrites=true&w=majority';
  if (req.method === 'POST') {
    const data = req.body;
    MongoClient.connect(connectionUrl, function (err, client) {
      const db = client.db('Meetups');
      const MeetupCollection = db.collection('Meetups');
      MeetupCollection.insertOne(data, function (error, result) {
        // if (!error) {
        //   console.log('Success :' + result.ops.length + ' chapters inserted!');
        // } else {
        //   console.log('Some error was encountered!');
        // }
        client.close();
        res.status(201).json({ message: 'Meetup Inserted!' });
      });
    });
  }
};

export default Helper;
