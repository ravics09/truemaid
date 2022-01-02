import React from 'react';
import { View, Text, Button} from 'react-native';

const Message = ({navigation}) => {
    return(
        <View>
            <Text>This is Message screen</Text>
            <Button onPress={()=>navigation.navigate('Chat')} title="Message To"/>
        </View>
    )
}

export default Message;