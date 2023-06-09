import { stack } from '../../common/stack';
import './stack.scss'

export default function Stack() {
  return (
    <div className='stack'>{stack.map((e, i) => {
        return <img key={i} src={e} className='stack-img'/>;
      })}</div>
  )
}
