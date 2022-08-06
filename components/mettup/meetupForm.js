import Card from '../ui/card';
import style from './meetupForm.module.css';
const MeetupForm = () => {
  return (
    <Card className={style.cardForm}>
      <form className={style.form} action=''>
        <div className={style.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' id='title' required />
        </div>
        <div className={style.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='text' id='image' required />
        </div>
        <div className={style.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' required />
        </div>
        <div className={style.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' rows='5'></textarea>
        </div>
        <div className={style.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default MeetupForm;
