import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  card: {
    flex:1,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingLeft:15,
    flexDirection: 'row',
    height:90
  },
  shadowProp: {
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    borderBottomRightRadius:20,
    borderTopLeftRadius:20
  },
});
export default styles;
