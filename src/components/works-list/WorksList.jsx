
import { data } from '../../common/data'
import WorksItem from '../works-item/WorksItem'

export default function WorksList() {
  return (
    <div>
        {data.map((item, i)=><WorksItem key={i} item = {item}/>)}
    </div>
  )
}
