import Taro from '@tarojs/taro';
import { useState, useEffect } from 'react';
import { View, Text, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import ImageButton from '../../Components/ImageButton';
import BackButton from '../../Components/BackButton';
import './Continent.css'
const Index = () => {
  const [purificationRate, setPurificationRate] = useState('');
  const [totalCapacity, setTotalCapacity] = useState('');

  // useEffect(() => {
  //   fetchData(); 
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('');
  //     const data = await response.json();
  //     setPurificationRate(data.purificationRate);
  //     setTotalCapacity(data.totalCapacity);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <View className='main'>
      <View className='continent'>
        <Image src={require('./assets/pictures/1.png')} className='image' />
      </View>

      <View className='words'>
        <Text className='text'>大陆净化率: {purificationRate}</Text>
        <Text className='text'>大陆总产能: {totalCapacity}</Text>
      </View>
      <View className='icons-container'>
        <ImageButton className='icon' src={require('./assets/pictures/capability.png')} navigateTo='' />
        <ImageButton className='icon' src={require('./assets/pictures/home.png')} navigateTo='../pages/Home/Index' />
        <ImageButton className='icon' src={require('./assets/pictures/backbutton.png')} onClick={() => { Taro.navigateBack(); }} />

      </View>
      <View className='continent-info'>
        <View className='name'>西伦瑞亚</View>
        <View className='main'>
          <View>
            <Image src={require('./assets/pictures/name.png')} className='icon2' />
            <Text>
              大陆名称 ：


              {/* data.name */}
            </Text>
          </View>
          <View>
            <Image src={require('./assets/pictures/details.png')} className='icon2' />
            <Text>
              大陆信息 ：
            </Text>
            {/* <View>
          {data.details}
        </View> */}
          </View>


        </View>

      </View>

    </View>
  );
};

export default Index;
