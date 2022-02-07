import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';
const pragati = require('./../../assets/images/algolia/women/pragati.png');
const fanette = require('./../../assets/images/algolia/women/fanette.png');
const alexs = require('./../../assets/images/algolia/men/alexs.png');

const messageData = [
  {
    maidID: 10,
    name: 'Ravi Sharma',
    picture: alexs,
    message: [
      {
        sent: [
          {text: 'Hi Maid, How are you ?'},
          {text: ' Where are you staying currently?'},
        ],
        received: [{text: 'I am fine'}, {text: 'I am staying in delhi'}],
      },
    ],
  },
  {
    maidID: 14,
    name: 'Kirti Sharma',
    picture: pragati,
    message: [
      {
        // date: new Date(), causing Warning for non-serializable values in navigation state when passing nested objects separately
        sent: [
          {text: 'Hi Maid, How are you ?'},
          {text: ' Where are you staying currently?'},
        ],
        received: [{text: 'I am fine'}, {text: 'I am staying in Bangalore'}],
      },
    ],
  },
    {
      name: 'rohit verma',
      picture: fanette,
      message: [
        {
          sent: [{text: 'Hi Maid, How are you ?'}],
          received: [{text: 'I am fine'}],
        },
      ],
    },
    {
      name: 'ravi Sharma',
      picture: alexs,
      message: [
        {
          sent: [{text: 'Hi Maid, How are you ?'}],
          received: [{text: 'I am fine'}],
        },
      ],
    },
    {
      name: 'kirti Sharma',
      picture: pragati,
      message: [
        {
          sent: [{text: 'Hi Maid, How are you ?'}],
          received: [{text: 'I am fine'}],
        },
      ],
    },
    {
      name: 'rohit verma',
      picture: fanette,
      message: [
        {
          sent: [{text: 'Hi Maid, How are you ?'}],
          received: [{text: 'I am fine'}],
        },
      ],
    }
];

const Message = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const onMessageClick = item => {
    navigation.navigate('Chat', { ChatInfo: item, maidName: item.name});
  };

  const renderVerticalList = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onMessageClick(item)}>
        <View style={[styles.card, styles.shadowProp]}>
          <Image
            source={item.picture ? item.picture : null}
            style={{width: 60, height: 60, borderRadius: 50}}
          />
          <View
            style={{
              flex: 1,
              paddingHorizontal: 16,
            }}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              {item.name}
            </Text>
            <Text style={{color: 'black', paddingTop: 5, paddingBottom: 50}}>
              {item.message[0].sent[0].text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messageData}
        keyExtractor={(item, index) => index}
        renderItem={(item, index) => renderVerticalList(item, index)}
      />
    </View>
  );
};

export default Message;
