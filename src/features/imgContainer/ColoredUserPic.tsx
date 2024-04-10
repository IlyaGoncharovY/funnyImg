import img from '../../assets/funnyImg.jpg';

import s from './ColoredUsserPick.module.css';
import {useHoverEffect} from './hook/useHoverEffect.ts';

export const ColoredUserPic = () => {

  const {
    isActiveGradient,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  } = useHoverEffect();

  // в css файле есть другая реализация при помощи hover
  return (
    <div
      className={s.dynamicBorder}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      style={{
        backgroundImage: isActiveGradient
          ? 'linear-gradient(to right, #415dee, #35e723)'
          : 'linear-gradient(to right, #35e723, #415dee)',
      }}
    >
      <div className={s.imgContainer}>
        <img src={img} alt={'funny img'}/>
      </div>
    </div>
  );
};
