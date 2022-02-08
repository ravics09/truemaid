import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  headerSubTitle: {
    color: 'lightgray',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  customImg:{
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  customButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    color: '#181D3D'
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10
  },
  checkboxContainer:{
    backgroundColor: 'white',
    borderRadius:50,
    width: '100%',
    marginVertical: 10
  },
  centeredView: {
    flex: 1,
    marginTop: 100,
    marginBottom: 100
  },
  modalView: {
    flex:1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 35,
    shadowColor: "white",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 5
  },
  payButton: {
    padding: 10,
    backgroundColor: '#181D3D',
    borderRadius: 50,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 'bold'
  },
  inputField:{
    color: '#181D3D',
  },
});

export default styles;
