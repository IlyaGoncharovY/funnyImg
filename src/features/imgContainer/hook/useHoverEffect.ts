import {useState} from 'react';


/**
 * custom hook for change gradient
 * @return isActiveGradient
 * @return onMouseEnterHandler
 * @return onMouseLeaveHandler
 */
export const useHoverEffect = () => {

  const [isActiveGradient, setIsActiveGradient] = useState<boolean>(false);

  const onMouseEnterHandler = () => setIsActiveGradient(true);
  const onMouseLeaveHandler = () => setIsActiveGradient(false);

  return {
    isActiveGradient,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  };
};
