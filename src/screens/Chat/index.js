import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
MaterialCommunityIcon.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning
FontAwesomeIcon.loadFont().then();

const Chat = ({navigation, route}) => {
  const [chatData, setChatData] = useState();
  const [messages, setMessages] = useState([]);
  const {ChatInfo, maidName} = route.params || {};

  useEffect(() => {
    if (ChatInfo) {
      setChatData(ChatInfo);
    //   console.log('ChatData here', ChatInfo);
    }
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hi Lullu',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcon name="send-circle" size={36} color="#181D3D" style={{marginVertical:5, marginRight:5}}/>
        </View>
      </Send>
    );
  };

  const scrollToBottomComponent = () =>{
      return (
          <FontAwesomeIcon name="angle-double-down" size={32} color="#333"/>
      )
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default Chat;
