import { StyleSheet } from 'react-native';
import transferByDpi from '../utils/transferByDpi';

export default StyleSheet.create(transferByDpi({
  wrapper: {
    height: 500,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  gridWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: 3,
    borderTopColor: '#ddd',
  },
  grid: {
    backgroundColor: '#ddd',
    paddingRight: 3,
    paddingBottom: 3,
  },
  gridInner: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
