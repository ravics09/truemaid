import {StyleSheet, Dimensions} from 'react-native';
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  renderItem: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  headerTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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
  customButton: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 20,
  },
  buttonContainer: {
    width: 100,
    marginVertical: 5,
  },
});

export default styles;
