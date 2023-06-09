import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './works-item.scss';
import { useState } from 'react';
import { Fade } from 'react-reveal';

function WorksItem(props) {
  const [fadeIn, setFadeIn] = useState(false);
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const { name, purpose, stack, github, description, img1, img2, deploy } =
    props.item;
  const lang = useSelector((state) => state.value.lang);

  return (
    <div className='project'>
      <div className='project-description'>
        <div className='project-description__name'>
          {name} -{' '}
          <span className='project-description__purpose'>{purpose[lang]}</span>
        </div>
        <div className='project-description__stack'>
        {lang == 'ru' ? 'Стек': 'Stack' }
            : <span>{stack}</span></div>
        <div className='project-description__github'>
          github:{' '}
          <a href={github} className='link'>
            {github}
          </a>
        </div>
        <div className='project-description__details'>{description[lang]} </div>
      </div>
      <div className='project-image'>
        <div
          className='project-image__wrapper'
          onMouseOver={() => setFadeIn(true)}
          onMouseOut={() => setFadeIn(false)}
        >
          <img src={img1} alt='' />
          <Fade right in={fadeIn} tag='h5' className='mt-3'>
            <img src={img2} alt='' className='additional-image' />
          </Fade>
        </div>
        <button onClick={() => openInNewTab(deploy)}>
          {lang == 'ru' ? 'смотреть приложение' : 'try it'}
        </button>
      </div>
    </div>
  );
}
WorksItem.propTypes = {
  item: PropTypes.object,
};

export default WorksItem;
