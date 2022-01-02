import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

const MaidDetail = ({navigation, route}) => {
  const aData = route.params.maidDetails;
  const [maidData, setMaidData] = useState();

  useEffect(() => {
    setMaidData(aData);
  }, []);

  const renderMaidDeatils = ({item, index}) => {
    <View key={index} style={{flex: 1}}>
      <Text>{item.first_name}</Text>
      <Text>{item.work}</Text>
      <Text>{item.salary}</Text>
    </View>;
  };

  return (
    <View>
      <Text style={{color: 'white'}}>Maid deatils sreen</Text>
      <FlatList
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={maidData}
        keyExtractor={(item, index) => index}
        renderItem={(item, index) => renderMaidDeatils(item, index)}
      />
    </View>
  );
};

export default MaidDetail;
