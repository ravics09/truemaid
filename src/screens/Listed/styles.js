import {StyleSheet, Dimensions} from 'react-native';
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  subTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  customButton: {
    backgroundColor: '#181D3D',
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 50,
  },
  buttonContainer: {
    width: 100,
    margin: 5,
  },
  card: {
    flex:1,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingLeft:15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shadowProp: {
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    borderBottomRightRadius:20,
    borderTopLeftRadius:20
  },
});

export default styles;
