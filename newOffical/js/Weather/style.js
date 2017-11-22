import { StyleSheet } from 'react-native';
import transferByDpi from '../utils/transferByDpi';

export default StyleSheet.create(transferByDpi({
  white: {
    color: '#fff',
  },
  midFontSize: {
    fontSize: 100,
  },
  smFontSize: {
    fontSize: 50,
  },
  lFontSize: {
    fontSize: 200,
  },
  xsFont: {
    fontSize: 40,
  },
  pageStyle: {
    backgroundColor: '#000',

  },
  panel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockStyle: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listStyle: {
    position: 'relative',
    marginTop: 100,
    bottom: 100,
  },
  listItemStyle: {
    flexDirection: 'row',
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    height: 500,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
}));
