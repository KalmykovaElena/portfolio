import './main.scss';
import WorksList from '../../components/works-list/WorksList';
import Header from '../../components/header/Header';

function Main() {
  return (
    <>
      <Header />
      <main className={'main'}>
      <div className="main-link"></div>
        <WorksList />
      </main>
    </>
  );
}

export default Main;
