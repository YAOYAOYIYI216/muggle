import React, { useState, useEffect } from 'react';
import { View, Image, Button } from '@tarojs/components';
import Item from './components/Item';
import './Store.css';
import BackButton from '../../Components/BackButton';

function Store() {
  const [active, setActive] = useState(0);
  const [data, setData] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  }
  // const handleClick = async (index) => {
  //   setActive(index);
  //   try {
  //     const response = await fetch(`https://.../store/data/${index + 1}`);
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error('Error', error);
  //   }
  // };

  // useEffect(() => {

  //   handleClick(active);
  // }, []); 

  return (
    <View className='shop'>
      <View className='header'>
        <BackButton outlook='<' />
        <Image
          src={require('./assets/pictures/1.png')}
          className={`header-item ${active === 0 ? 'active' : ''}`}
          onClick={() => handleClick(0)}
        />
        <Image
          src={require('./assets/pictures/2.png')}
          className={`header-item ${active === 1 ? 'active' : ''}`}
          onClick={() => handleClick(1)}
        />
        <Image
          src={require('./assets/pictures/3.png')}
          className={`header-item ${active === 2 ? 'active' : ''}`}
          onClick={() => handleClick(2)}
        />
        
      </View>
      <View className='main'>
       
        <View className='item'>
          <Item

            imageUrl={require('./assets/pictures/西伦物种卡片图/1.png')}
          
          />
          <Item

            imageUrl={require('./assets/pictures/西伦物种卡片图/1.png')}
          
          />
          <Item

            imageUrl={require('./assets/pictures/西伦物种卡片图/1.png')}
         
          />
          <Item

            imageUrl={require('./assets/pictures/西伦物种卡片图/1.png')}
          
          />

        </View>
       
      </View>
    </View>
  );
}

export default Store;
