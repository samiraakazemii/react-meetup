import style from './meetupItem.module.css';
import Card from '../ui/card';
const MeetupItem = (props) => {
  return (
    <li className={style.item}>
      <Card>
        <div className={style.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={style.action}>
          <button>show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
