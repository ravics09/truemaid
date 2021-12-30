import {StyleSheet, Dimensions} from 'react-native';
const  Height =  Dimensions.get('window').height;

const styles = StyleSheet.create({
  header:{
    flex:1,
    height: Height/2,
    backgroundColor: '#181D3D'
  },
  appdName:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderBottomRightRadius:100,
  },
  body:{
    flex:1,
    height: Height/2,
    backgroundColor: 'orange',
  },
  buttonSection:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181D3D',
    borderTopLeftRadius:100
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white'
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
    color: 'white'
  },
  customButtn: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
  },
  buttonContainer: {
    width: 250,
    marginHorizontal: 50,
    marginVertical: 10,
  }
});

export default styles;
