
import { useState, useEffect } from 'react';
import { View } from '@tarojs/components';
import Item from '../../Components/Item';
import './Shop.css'; 

function Shop() {
  const [itemList, setItemList] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('');
  //     const data = await response.json();
  //     setItemList(data);
  //   } catch (error) {
  //     console.error('请求错误', error);
  //   }
  // };

  const renderItems = () => {
    return itemList.map((item, index) => {
      return (
        <Item key={index} data={item} />
      );
    });
  };

  return (
    <View>
      <View className='header'>
        <Back />
      </View>
      <View className="shop-container">
        <View className="item-list">{renderItems()}</View>
      </View>
    </View>
    
  );
}

export default Shop;
