import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import PropTypes from 'prop-types';

function ImageButton({ src, className, onClick, navigateTo }) {
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
      <Image src={src}  />
    </View>
  );
}

ImageButton.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  navigateTo: PropTypes.string.isRequired
};

export default ImageButton;
