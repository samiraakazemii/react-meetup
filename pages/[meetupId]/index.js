import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/mettup/meetupDetail';
import Head from 'next/head';

const MeetupDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupdata.title}</title>
        <meta name='description' content={props.meetupdata.description} />
      </Head>
      <MeetupDetail
        image={props.meetupdata.image}
        title={props.meetupdata.title}
        address={props.meetupdata.address}
        id={props.meetupdata.id}
        description={props.meetupdata.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://samirakazemi0203:nu6kr8uCV4r83TWz@cluster0.t9dgnb2.mongodb.net/Meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const MeetupCollection = db.collection('Meetups');
  const AllMeetup = await MeetupCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: AllMeetup.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    'mongodb+srv://samirakazemi0203:nu6kr8uCV4r83TWz@cluster0.t9dgnb2.mongodb.net/Meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const MeetupCollection = db.collection('Meetups');
  const SelectedMeetup = await MeetupCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupdata: {
        image: SelectedMeetup.image,
        title: SelectedMeetup.title,
        id: SelectedMeetup._id.toString(),
        address: SelectedMeetup.address,
        description: SelectedMeetup.description,
      },
    },
  };
}

export default MeetupDetailPage;
