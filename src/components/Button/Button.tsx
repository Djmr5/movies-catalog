import './Button.css';
import { IButton } from './types';
import classNames from 'classnames';

const Button: React.FC<IButton> = ({ isActive, className, onClick, children }) => {

  const buttonStyle = classNames(
    'button',
    {
      'button--active': isActive,
      'button--inactive': !isActive
    }
  );

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }


  return (
    <button className={`${className} ${buttonStyle}`} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button;