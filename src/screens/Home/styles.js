import {StyleSheet, Dimensions} from 'react-native';
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    height: 230 ,
    backgroundColor: 'white',
  },
  headerBody: {
    flex: 1,
    backgroundColor: '#181D3D',
    borderBottomRightRadius: 50,
  },
  searchSection: {
    alignItems: 'center',
    paddingTop: 20,
    boarderRadius: 50
  },
  horizontalFlatlist: {
    flex:1
  },

  footer: {
    flex: 1,
    backgroundColor: '#181D3D',
  },
  footerBody: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
  },
  vericalFlatlist: {
    flex:1,
    paddingTop: 20,
    paddingHorizontal:15
  },
  filterImage:{
    width: 50,
    height: 50,
    borderRadius:50
  }
});

export default styles;
