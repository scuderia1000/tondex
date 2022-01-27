import React, { ImgHTMLAttributes, useState } from 'react';
import { ReactComponent as Question } from '../assets/svg/help_outline.svg';

const cssPrefix = 'image';

const ImageFallback: React.FC<ImgHTMLAttributes<any>> = ({ src, ...props }) => {
  const [isError, setIsError] = useState(false);

  const onError = () => setIsError(true);

  return (
    <>
      {isError ? (
        <div className={cssPrefix}>
          <Question />
        </div>
      ) : (
        <img src={src} onError={onError} {...props} className={`${cssPrefix} ${props.className}`} />
      )}
    </>
  );
};

export default ImageFallback;
