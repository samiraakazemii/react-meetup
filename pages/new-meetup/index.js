import MeetupForm from '../../components/mettup/meetupForm';

const NewMeetupPage = () => {
  const AddMeetupHandler = (MeetupData) => {
    console.log(MeetupData);
  };
  return <MeetupForm onAddMeetup={AddMeetupHandler} />;
};

export default NewMeetupPage;
