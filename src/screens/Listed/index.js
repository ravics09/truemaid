import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

const maidData = [
  {
    key: '1',
    name: 'Ritu Sinha',
    salary: '15000',
    uri: 'https://picsum.photos/id/1/200',
  },
  {
    key: '2',
    name: 'Reenu Shah',
    salary: '20000',
    uri: 'https://picsum.photos/id/10/200',
  },

  {
    key: '3',
    name: 'Pooja Sharma',
    salary: '12000',
    uri: 'https://picsum.photos/id/1002/200',
  },
  {
    key: '4',
    name: 'Kirti Mishra',
    salary: '9000',
    uri: 'https://picsum.photos/id/1006/200',
  },
  {
    key: '5',
    name: 'Sinu Toyo',
    salary: '10500',
    uri: 'https://picsum.photos/id/1008/200',
  },
];

const renderMaidList = ({item}) => {
  return (
    <View
      key={item.key}
      style={{
        padding: 16,
        width: '60%',
        height: 100,
        marginHorizontal: 10,
        color: 'white',
      }}>
      <Text style={{color: 'white'}}>{item.name}</Text>
      <Text style={{color: 'white'}}>{item.salary}</Text>
    </View>
  );
};

const Listed = ({navigation}) => {
  const [data, setData] = useState(maidData);

  return (
    <View>
      <Text style={{color: 'white'}}>This is Listed maid screen</Text>
      <Button onPress={()=>navigation.navigate('MaidDetailScreen')} title="View Maid Details"/>
      {/* <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={item => renderMaidList(item)}
      /> */}
    </View>
  );
};

export default Listed;
