
import { View, Image, Text } from '@tarojs/components';

function Item({ data }) {
  return (
    <View className="item">
      {data && (
        <View>
          <Image src={data.imageUrl} style={{ width: '100px', height: '100px' }} />
          <Text>{data.text}</Text>
        </View>
      )}
    </View>
  );
}

export default Item;
