import PropTypes from 'prop-types';
import './aducation-item.scss'

export default function AducationItem({item}) {
  return (
    <div className="aducation-item">
    <div className="aducation-item__name">{item.type}: <span>{item.name}</span></div>
    <div className="aducation-item__specialization">{item.specialization}</div>
    <div className="aducation-item__year">{item.year}</div>
    </div>
  )
}

AducationItem.propTypes = {
    item: PropTypes.object,
  };