import MeetupForm from '../../components/mettup/meetupForm';

const NewMeetup = () => {
  const AddMeetupHandler = (MeetupData) => {
    console.log(MeetupData);
  };
  return <MeetupForm onAddMeetup={AddMeetupHandler} />;
};

export default NewMeetup;
