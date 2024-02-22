import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import backIcon from '../../assets/pictures/back.png'; 

function BackButton() {
  const handleClick = () => {
    Taro.navigateBack();
  };

  return (
    <View onClick={handleClick}>
      <Image src={backIcon} style={{ width: '20px', height: '20px' }} />
    </View>
  );
}

export default BackButton;
