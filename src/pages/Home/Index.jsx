import Taro from '@tarojs/taro';
import { useState, useEffect } from 'react';
import { View, Text, Image } from '@tarojs/components';
import './Home.css'
import ImageButton from './components/ImageButton';
import Continent from './components/Continent';


function Home() {
  const [username, setUsername] = useState('');
  const [totalEnergy, setTotalEnergy] = useState(1000);
  const [remainingEnergy, setRemainingEnergy] = useState(1000);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('接口');
  //     const data = await response.json();
  //     setUsername(data.username);
  //     setTotalEnergy(data.totalEnergy);
  //     setRemainingEnergy(data.remainingEnergy);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <View className='body'>
      <View className='userinfo'>
        <Image
          className='planet'
          src={require('./assets/pictures/planet.png')}></Image>
        <Text>我的星球名 : {username}</Text>
        <Text>总能量值: {totalEnergy}</Text>
        <Text>剩余能量值: {remainingEnergy}</Text>
      </View>
      <View className='main'>
        <Continent
          className='continent1'
          images={{
            1: require('./assets/pictures/1.1.png'),
            // 2: require('./assets/pictures/1.2.png'),
            // 3: require('./assets/pictures/1.3.png'),
          }}
          // navigateTo="../pages/"
          //补完
          stateKey="states"
        />
        <Continent className='continent2' />
        <Continent className='continent3' />
        <Continent className='continent4' />
        <Continent className='continent5' />

      </View>
      <View className='navibar'>
        <ImageButton src={require('./assets/pictures/shop.png')}
          className="shop"
          navigateTo="../pages/Shop/Index" />
        <ImageButton src={require('./assets/pictures/store.png')}
          className="store"
          navigateTo="../pages/Store/Index" />
        <ImageButton src={require('./assets/pictures/share.png')}
          className="share"
          navigateTo="../pages/Share/Index" />
        <ImageButton src={require('./assets/pictures/more.png')}
          className="more"
          navigateTo="../pages/More/Index" />
      </View>
      <View className='sidebar'>
        <ImageButton src={require('./assets/pictures/game.png')}
          className="game"
          navigateTo="../pages/Game/Index" />
        <ImageButton src={require('./assets/pictures/knowledge.png')}
          className="knowledge"
          navigateTo="../pages/Knowledge/Index" />

      </View>

    </View>
  );
}

export default Home;
