import style from './layout.module.css';
import MainHeader from './mainHeader';
const Layout = (props) => {
  return (
    <div>
      <MainHeader />
      <main className={style.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
