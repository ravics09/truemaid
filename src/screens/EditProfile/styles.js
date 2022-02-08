import {StyleSheet, Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
  header: {
    height: HEIGHT / 4,
    paddingHorizontal:15,
  },
  headerSections: {
    paddingVertical: 15,
    // borderBottomLeftRadius: 100
  },
  headerTitle: {
    color: 'white',
    fontSize:16,
    fontWeight: 'bold',
    paddingBottom:5
  },
  headerSubTitle: {
    color: 'white',
  },
  footer:{
    height: HEIGHT, 
    paddingHorizontal:15,
    backgroundColor: 'white'
  },
  footerSection: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor:'lightgray'
  },
  footerTitle:{
    color: 'black',
    fontWeight: 'bold',
    paddingBottom:5
  },
  footerSubTitle:{
    color: 'black',
  },
  inputField:{
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
