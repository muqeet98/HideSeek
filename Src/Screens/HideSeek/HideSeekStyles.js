import { hp, wp } from '../../Helpers/Responsiveness';
import { Dimensions, StyleSheet } from 'react-native';
const { height } = Dimensions.get('window');

const makeStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#36335D'
    },
    main: {
      // marginTop: wp(-5),
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: wp(4),
      borderTopLeftRadius: wp(3),
      borderTopRightRadius: wp(3),
      paddingTop: 10
    },
    freeDrinks: {
      width: '100%',
      height: wp(33),
      resizeMode: 'contain',
      marginVertical: wp(5),
    },
    addProfile: {
      width: wp(15),
      height: wp(15),
      resizeMode: 'contain',
    },
    moreVideos: {
      width: wp(7),
      height: wp(7),
      resizeMode: 'contain',
    },
    moreVideosWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    addIcon: {
      width: wp(4),
      height: wp(4),
      resizeMode: 'contain',
      position: 'absolute',
      bottom: 0,
      left: wp(11),
    },
    addProfileWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: wp(4),
    },
    radioButtonWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: wp(4),
      marginBottom: wp(6),
    },
    needHelp: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: wp(4),
      justifyContent: 'center',
    },
    footer: {
      marginTop: wp(7),
    },
    bar: {
      backgroundColor: '#FFFFFF',
      width: wp(34),
      borderWidth: 2,
      borderColor: '#FFFFFF',
    },
    videoStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    videoWrapper: {
      borderColor: '#36335D',
      borderWidth: 20,
      borderRadius: 10,
    },
  });

export default makeStyles;
