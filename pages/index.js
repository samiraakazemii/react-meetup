import MeetupList from '../components/mettup/meetupList';
import { MongoClient } from 'mongodb';

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://samirakazemi0203:nu6kr8uCV4r83TWz@cluster0.t9dgnb2.mongodb.net/Meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const MeetupCollection = db.collection('Meetups');
  const AllMeetup = await MeetupCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: AllMeetup.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
