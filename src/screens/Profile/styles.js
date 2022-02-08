import {StyleSheet, Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    height: HEIGHT / 4,
    paddingHorizontal:15,
    marginBottom:15
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
  }
});

export default styles;
