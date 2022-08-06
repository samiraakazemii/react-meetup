import { useRef } from 'react';
import Card from '../ui/card';
import style from './meetupForm.module.css';
const MeetupForm = ({ onAddMeetup }) => {
  const TitleInputRef = useRef();
  const ImageInputRef = useRef();
  const AddressInputRef = useRef();
  const DescriptionInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredTitle = TitleInputRef.current.value;
    const enteredImage = ImageInputRef.current.value;
    const enteredAddress = AddressInputRef.current.value;
    const enteredDescription = DescriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    onAddMeetup(meetupData);
  };
  return (
    <Card className={style.cardForm}>
      <form className={style.form} onSubmit={submitFormHandler}>
        <div className={style.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' id='title' ref={TitleInputRef} required />
        </div>
        <div className={style.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='text' id='image' ref={ImageInputRef} required />
        </div>
        <div className={style.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' ref={AddressInputRef} required />
        </div>
        <div className={style.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            rows='5'
            ref={DescriptionInputRef}
            required
          ></textarea>
        </div>
        <div className={style.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default MeetupForm;
