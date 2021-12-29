import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom:30
  },
  header: {
    marginTop:100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'System',
    fontWeight: 'bold'
  },
  welcomeSubtitle: {
    color: 'black',
    marginTop: 10,
    marginBottom: 24,
  },
  body: {
    // paddingHorizontal: 15,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginVertical: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  footerText:{
    fontSize: 13,
    color: 'black',
  },
  singUpLink: {
    fontWeight: 'bold',
    color: 'white',
  },
  LogoContainer:{
    flex:1,
    alignItems: 'center',
    marginBottom:10
  },
  signInButton: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  googleButton:{
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30
  }
});

export default styles;
