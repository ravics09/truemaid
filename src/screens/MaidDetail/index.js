import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';

const MaidDetail = ({navigation, route}) => {
//   const {maidDetail} = route.params;

  const renderMaidDeatils = ({item, index}) => {
    <View key={index} style={{flex: 1}}>
      <Text>{item.first_name}</Text>
      <Text>{item.work}</Text>
      <Text>{item.salary}</Text>
    </View>;
  };

  return (
    <View>
        <Text>Maid deatils sreen</Text>
      {/* <Text>{maidDetail.username}</Text>
      <FlatList
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={maidDetail}
        keyExtractor={(item, index) => index}
        renderItem={(item, index) => renderMaidDeatils(item, index)}
      /> */}
    </View>
  );
};

export default MaidDetail;
