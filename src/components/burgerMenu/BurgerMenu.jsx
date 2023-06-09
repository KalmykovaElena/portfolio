
import { useDispatch } from 'react-redux';
import './burgerMenu.scss'
import { setBurgerOpen } from '../../redux/reducer';

export default function BurgerMenu() {
    const dispatch = useDispatch();
  return (
    <div className='burger-wrapper' onClick={() => dispatch(setBurgerOpen())}> 
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
    </div>
  )
}
