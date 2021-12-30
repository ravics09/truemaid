import React from 'react';
import { View, Text, Button} from 'react-native';

const Profile = ({navigation}) => {
    return(
        <View>
            <Text>This is Profile screen</Text>
            <Button onPress={()=>navigation.navigate('EditProfileScreen')} title="Edit Profile"/>
        </View>
    )
}

export default Profile;