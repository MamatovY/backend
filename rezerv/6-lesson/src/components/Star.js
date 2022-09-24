import { FaStar } from 'react-icons/fa'

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} ></FaStar>
    //Когда пользователь нажимет на звезду OnClick=OnSelect=>setSelectStarts(i+1)
)

export default Star