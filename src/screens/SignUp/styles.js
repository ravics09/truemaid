import {StyleSheet, Dimensions} from 'react-native';
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: Height / 2,
    backgroundColor: '#181D3D',
  },
  appdName: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderBottomLeftRadius: 100,
  },
  body: {
    flex: 1,
    height: Height / 2,
    backgroundColor: 'orange'
  },
  formSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#181D3D',
    borderTopRightRadius: 100,
    paddingHorizontal:10,
    paddingTop: 20
  },
  welcomeText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  welcomeSubtitle: {
    color: 'black',
    marginTop: 10,
    marginBottom: 24,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginVertical: 10,
    paddingHorizontal:10,
  },
  forgotPasswordText: {
    fontSize: 13,
    color: 'lightgray',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  footerText: {
    fontSize: 13,
    color: 'lightgray',
  },
  singUpLink: {
    fontWeight: 'bold',
    color: 'white'
  },
  inputField:{
    color: 'white',
  },
  signUpButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    color: 'black'
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal:10,
  }
});

export default styles;
