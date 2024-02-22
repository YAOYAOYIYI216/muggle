import Taro from '@tarojs/taro';
import { useState, useEffect } from 'react';
import { View, Image } from '@tarojs/components';
import PropTypes from 'prop-types';

function Continent({ images, className, onClick, navigateTo, stateKey }) {
  const [buttonImage, setButtonImage] = useState(images.default);

  useEffect(() => {
    const states = Taro.getCurrentInstance().router?.states ||'1';
    if (states && states[stateKey]) {
      const selectedImage = images[states[stateKey]];
      if (selectedImage) {
        setButtonImage(selectedImage);
      }
    }
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    Taro.navigateTo({
      url: navigateTo
    });
  };

  return (
    <View className={className} onClick={handleClick}>
      <Image src={buttonImage}  />
    </View>
  );
}

ImageButton.propTypes = {
  images: PropTypes.objectOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  navigateTo: PropTypes.string.isRequired,
  paramKey: PropTypes.string.isRequired
};

export default Continent;
