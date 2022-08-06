import { useRouter } from 'next/router';
import Card from '../ui/card';
import style from './meetupItem.module.css';
const MeetupItem = (props) => {
  const Router = useRouter();

  const meetupDetailHandler = () => {
    Router.push(`/${props.id}`);
  };
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
          <button onClick={meetupDetailHandler}>show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
