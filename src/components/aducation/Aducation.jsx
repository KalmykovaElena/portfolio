import { useSelector } from 'react-redux';
import { aducation } from '../../common/aducation';
import AducationItem from '../aducation-item/AducationItem';
import './aducation.scss';
import rs from '../../assets/images/rs-certificate.png'
import step from '../../assets/images/step-sertificate.jpg'
import Stack from '../stack/stack';

export default function Aducation() {
  const lang = useSelector((state) => state.value.lang);
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <section className='aducation'>
      <div className='aducation-description'>
        <div className='aducation-heading'>
          {lang == 'en' ? 'Aducation' : 'Образование'}
        </div>
        {aducation[lang].map((e, i) => {
          return <AducationItem key={i} item={e} />;
        })}
        <div className='aducation-heading'>
        {lang == 'en' ? 'Stack' : 'Стэк'}
        </div>
        <Stack/>
      </div>
      <div className="aducation-certificates">
        <img className="aducation-certificates__img" src={step} alt="" onClick={() => openInNewTab('https://diploma.itstep.org/diplom?id=NDI5MTE')}/>
        <img className="aducation-certificates__img" src={rs} alt="" onClick={() => openInNewTab('https://app.rs.school/certificate/2rdz8ilj')}/>
      </div>
    </section>
  );
}
