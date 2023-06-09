import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const lang = useSelector((state) => state.value.lang);
  const isBurgerOpen = useSelector((state) => state.value.isBurgerOpen);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
    }, []);
  return (
    <nav className={width>600 ?'nav-active':  isBurgerOpen?'nav-active':'nav-disable'}>
      <NavLink to="/">{lang == 'ru' ? 'Работы' : 'Works'} </NavLink>
      <NavLink to="/about-me">{lang == 'ru' ? 'ОбоМне' : 'AboutMe'}</NavLink>
      <NavLink to="/contacts">{lang == 'ru' ? 'Контакты' : 'Contacts'}</NavLink>
    </nav>
  );
};
export default Navbar;
