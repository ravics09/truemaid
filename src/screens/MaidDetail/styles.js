import {StyleSheet, Dimensions} from 'react-native';
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  imageContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom:10
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
  customButton:{
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10
  },
});

export default styles;
