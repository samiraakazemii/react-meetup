import MeetupForm from '../../components/mettup/meetupForm';
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
  const router = useRouter();
  const AddMeetupHandler = async (MeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(MeetupData),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    router.push('/');
  };
  return <MeetupForm onAddMeetup={AddMeetupHandler} />;
};

export default NewMeetupPage;
