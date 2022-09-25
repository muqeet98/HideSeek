import React, {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Container from '../../Components/Container';
import {wp, hp} from '../../Helpers/Responsiveness';
import RnText from '../../Components/RnText';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HideSeek');
    }, 2000);
  }, []);
  return (
    <LinearGradient colors={['#36335D', '#36335D']} style={styles.splash_image}>
      <View style={styles.textWrapper}>
        <RnText
          fontWeight={'600'}
          size="h3"
          color={'#FFFFFF'}
          textAlign
          margin={[0, 0, 0, 0]}>
          Splash Screen
        </RnText>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splash_image: {
    flex: 1,
  },

  textWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default SplashScreen;
