import './Pill.css';
import { IPill } from './types';
import classNames from 'classnames';

const Pill: React.FC<IPill> = ({ text, color }) => {

    const pillStyle = classNames('pill', `bg-${color}-600`);

    return (
        <div className={pillStyle}>
            {text}
        </div>
    )
}

export default Pill;