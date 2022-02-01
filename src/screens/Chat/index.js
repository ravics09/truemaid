import React, {useState, useEffect} from 'react';
import { View, Text, Button} from 'react-native';

const Chat = () => {
    const [lastChat, setLastChat] =  useState([]);

    useEffect(() => {
        // setLastChat();
      }, []);
      
    return(
        <View>
            <Text>This is Chating screen</Text>
        </View>
    )
}

export default Chat;