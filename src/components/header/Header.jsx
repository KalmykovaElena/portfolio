import { useSelector, useDispatch } from 'react-redux';
import { changeLang } from '../../redux/reducer';
import './header.scss'
import Navbar from '../navbar/Navbar';
import BurgerMenu from '../burgerMenu/BurgerMenu';

export default function Header() {
  const lang = useSelector((state) => state.value.lang);
  const dispatch = useDispatch();
  return (
    <header className="header">
        <div className="header-name"> {lang == 'ru' 
        ? <>Калмыкова<span>Елена</span></> 
        : <>Kalmykova<span>Elena</span></> }
        </div>
        <Navbar/>
      <button onClick={() => dispatch(changeLang())}> {lang == 'ru' ? 'en' : 'ru'}</button>
      <BurgerMenu/>
    </header>
  );
}
