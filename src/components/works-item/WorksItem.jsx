import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './works-item.scss';
import { useState } from 'react';
import { Fade } from 'react-reveal';
import { Modal } from 'antd';
import { Slider } from '../slider';

function WorksItem(props) {
  const [fadeIn, setFadeIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const { name, purpose, stack, github, description, images, deploy } =
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
          onClick={() => setIsModalOpen(true)}
        >
          <img src={images[0]} alt='' />
          <Fade right in={fadeIn} tag='h5' className='mt-3'>
            <img src={images[1]} alt='' className='additional-image' />
          </Fade>
        </div>
        <button onClick={() => openInNewTab(deploy)}>
          {lang == 'ru' ? 'смотреть приложение' : 'try it'}
        </button>
      </div>
      <Modal
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            closeIcon={null}
            footer={null}
            wrapClassName="slider-wrapper"
            centered={true}
            width="100%"
          >
            <Slider files={images} />
          </Modal>
    </div>
  );
}
WorksItem.propTypes = {
  item: PropTypes.object,
};

export default WorksItem;
