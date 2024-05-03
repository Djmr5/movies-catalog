import { useEffect, useState } from 'react';
import './FavButton.css';
import { IFavButton } from './types';
import classNames from 'classnames';

const FavButton: React.FC<IFavButton> = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string>("");

  const buttonStyle = classNames(
    'fav-button',
    {
      'fav-button--active': isFavorite,
      'fav-button--inactive': !isFavorite
    }
  );

  const handleFavoriteChange = () => {
    const favs = favorites.length > 0 ? JSON.parse(favorites) : [];
    let newFavorites: number[] = [];
    if (isFavorite) {
      newFavorites = [...favs];
      newFavorites = newFavorites.filter(fav => fav !== id);
    } else {
      newFavorites = [...favs, id];
    }
    setIsFavorite(!isFavorite);
    setFavorites(JSON.stringify(newFavorites));
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  useEffect(() => {
    const favs = localStorage.getItem('favorites') || '';
    setFavorites(favs);
    if (favs.length > 0) {
      const favsArray = JSON.parse(favs);
      setIsFavorite(favsArray.includes(id));
    }
  }, [id]);

  return (
    <button className={buttonStyle} onClick={handleFavoriteChange}>
      {isFavorite ?
        <svg className='h-4' aria-hidden="true" focusable="false" data-prefix="fas"
          data-icon="heart-broken" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor"
            d="M473.7 73.8l-2.4-2.5c-46-47-118-51.7-169.6-14.8L336 159.9l-96
            64 48 128-144-144 96-64-28.6-86.5C159.7 19.6 87 24 40.7 71.4l-2.4
            2.4C-10.4 123.6-12.5 202.9 31 256l212.1 218.6c7.1 7.3 18.6 7.3 25.7
            0L481 255.9c43.5-53 41.4-132.3-7.3-182.1z"
          >
          </path>
        </svg>
        :
        <svg className="h-4" aria-hidden="true" focusable="false" data-prefix="fas"
          data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor"
            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1
            24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5
            12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
          >
          </path>
        </svg>
      }
      <span className='px-1'>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </span>
    </button>
  )
}

export default FavButton;