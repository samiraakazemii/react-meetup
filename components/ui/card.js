import style from './card.module.css';

const Card = (props) => {
  const classes = `${props.className} ${style.card}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
