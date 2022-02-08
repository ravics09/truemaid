import {StyleSheet, Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  inputField: {
    color: 'white',
  },
  customButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    color: '#181D3D'
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal:10
  },
});

export default styles;
