import MeetupItem from './meetupItem';
import style from './meetupList.module.css';

const MeetupList = (props) => {
  return (
    <ul className={style.list}>
      {props.meetups.map((meetup) => {
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          address={meetup.address}
          title={meetup.title}
        />;
      })}
    </ul>
  );
};

export default MeetupList;
