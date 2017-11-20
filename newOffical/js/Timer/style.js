import { StyleSheet } from 'react-native';
import transferByDpi from '../utils/transferByDpi';

export default StyleSheet.create(transferByDpi({
  timer: {
    flex: 1,
  },
  timerPanel: {
    flex: 0.5,
    paddingLeft: 150,
    paddingRight: 150,
  },
  fontNever: {
    fontFamily: 'Never say never',
  },
  fontPlaze: {
    fontFamily: 'PlazaDReg',
  },
  titleL: {
    fontSize: 250,
    textAlign: 'right',
    top: 50,
  },
  titleM: {
    fontSize: 75,
    textAlign: 'right',
    top: 50,
  },
  btnGroup: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 40,
  },
  list: {
    flex: 2,
    backgroundColor: '#ddd',
    paddingLeft: 50,
    paddingRight: 50,
  },
  listItem: {
    borderBottomWidth: 3,
    borderBottomColor: '#ccc',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },
  normalFont: {
    flex: 1,
    fontSize: 40,
  },
}));
