import { useSelector } from 'react-redux';
import { information } from '../../common/info';
import photo from '../../assets/photo1.png'

export default function AboutInfo() {
    const lang = useSelector((state) => state.value.lang);
    const info = information[lang];
  return (
    <main className={'main'}>
        <div className='about'>
          <div className='about-name'>{info.performance}</div>
          <div className='about-description'>{info.description}</div>
        </div>
        <div className='photo'>
          <img className='photo-img' src={photo} alt='' />
        </div> 
      </main>
  )
}
