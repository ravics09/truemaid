import {StyleSheet, Dimensions} from 'react-native';
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  imageContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userImage: {
    width: '100%',
    height: '100%',
    // borderRadius: 50
  },
  headerTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  basicInfo: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  advanceInfo: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  subTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
});

export default styles;
