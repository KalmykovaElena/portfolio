import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import './contacts.scss'

export default function Contacts() {
  const lang = useSelector((state) => state.value.lang);
  return (
    <>
      <Header />
      <div className='contacts'>
        <div>
          {lang == 'ru' ? 'Телефон' : 'Phone number'}:{' '}
          <span>+375(33)317-38-30, +375(44)768-79-64</span>
        </div>
        <div>
        Viber: <span>+375(33)317-38-30</span>
        </div>
        <div>
        WhatsApp: <span>+375(44)768-79-64</span>
        </div>
        <div>
        Telegram: <span>@elenakalmykhova</span>
        </div>
        <div>
        Skype: <span>live:.cid.630baff083d9957e</span>
        </div>
        <div>
        Instagram: <span>lena_kalmykhova</span>
        </div>
        <div>
          Email: <span> kalmykhovae@gmail.com</span>
        </div>
        <div>
        Linkedin:
          <span> : https://www.linkedin.com/in/elena-kalmykova-731223247/</span>
        </div>
      </div>
    </>
  );
}
