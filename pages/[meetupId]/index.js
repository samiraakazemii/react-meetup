import MeetupDetail from '../../components/mettup/meetupDetail';

const MeetupDetailPage = (props) => {
  return (
    <MeetupDetail
      image={props.meetupdata.image}
      title={props.meetupdata.title}
      address={props.meetupdata.address}
      id={props.meetupdata.id}
      description={props.meetupdata.description}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupdata: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        title: 'm1',
        id: meetupId,
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
      },
    },
  };
}

export default MeetupDetailPage;
