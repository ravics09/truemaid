import {StyleSheet, Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  inputField: {
    color: 'white',
  },
  customBtn: {
    paddingHorizontal: 20,
  },
  buttonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default styles;
