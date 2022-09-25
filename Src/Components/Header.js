import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import {wp} from '../Helpers/Responsiveness';
import RnText from '../Components/RnText';
import IconBack from '../Assets/Icons/IconBack.png';
import HeaderIcon from '../Assets/Icons/HeaderIcon.png';

const Header = props => {
  const styles = makeStyles();
  return (
    <View style={styles.topBar}>
      {props.back && (
        <TouchableOpacity onPress={props.onPress}>
          <Image source={IconBack} style={styles.imageBack} />
        </TouchableOpacity>
      )}

      {props.title && (
        <View style={styles.title}>
          <RnText fontWeight={'700'} size="h4" color={'#FFFFFF'}>
            {props.title}
          </RnText>
          <RnText fontWeight={'400'} size="h5" color={'#FFFFFF'}>
            {props.titleDetail}
          </RnText>
        </View>
      )}
      {props.count ? (
        <Image source={HeaderIcon} style={styles.image} />
      ) : (
        <Text />
      )}
    </View>
  );
};
export default Header;

const makeStyles = colors =>
  StyleSheet.create({
    main: {
      paddingHorizontal: wp(6),
    },
    topBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#36335D',
      paddingVertical: wp(3),
      paddingHorizontal: wp(4),
      paddingTop: StatusBar.currentHeight,
    },

    backWrapper: {
      backgroundColor: '#FFFFFF',
      width: wp(10),
      height: wp(10),
      borderRadius: 6,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileWrapper: {
      width: wp(10),
      height: wp(10),
    },

    image: {
      width: wp(4),
      height: wp(4),
      resizeMode: 'contain',
    },

    imageBack: {
      width: wp(5),
      height: wp(7),
      resizeMode: 'contain',
    },
    title: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
  });
