import style from './meetupDetail.module.css';

const MeetupDetail = ({ image, title, address, description }) => {
  return (
    <section className={style.Detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
