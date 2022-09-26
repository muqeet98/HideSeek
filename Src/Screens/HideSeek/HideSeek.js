import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import RnText from '../../Components/RnText';
import Header from '../../Components/Header';
import makeStyles from './HideSeekStyles';
import FreeDrinks from '../../Assets/Images/FreeDrinks.png';
import MoreVideos from '../../Assets/Icons/MoreVideos.png';
import AddProfile from '../../Assets/Icons/AddProfile.png';
import AddIcon from '../../Assets/Icons/AddIcon.png';
import { PhoneNumberPicker } from '../../Components/CountryCodePicker/CountryCodePicker';
import Button from '../../Components/Button';
import TextInputCustom from '../../Components/TextInput';
import RadioButton from '../../Components/RadioButton';
import { wp } from '../../Helpers/Responsiveness';
import VideoPlayer from 'react-native-video-player';

import Video from 'react-native-video';

const HideSeek = () => {
  const styles = makeStyles();
  const [gender, setGender] = useState('male');

  return (
    <View style={styles.container} >
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Header
        back
        title={'Hide & Seek'}
        titleDetail={'Facebook For Bars & Clubs'}
        count
      />
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <Image source={FreeDrinks} style={styles.freeDrinks} />
        <View style={styles.videoWrapper}>
          <VideoPlayer
            video={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            videoWidth={1600}
            videoHeight={900}
            thumbnail={{ uri: 'https://media.istockphoto.com/photos/red-play-icon-button-on-white-background-social-media-and-sign-3d-picture-id1348212541?b=1&k=20&m=1348212541&s=170667a&w=0&h=6L67l228RvKoBbEzcw7LtfZDspPL3AQP4P9QZmeziIQ=' }}
          />
        </View>
        <View style={styles.moreVideosWrapper}>
          <Image source={MoreVideos} style={styles.moreVideos} />
          <RnText
            fontWeight={'600'}
            size="h6.5"
            color={'#000000'}
            textAlign
            margin={[12, 0, 12, 10]}>
            More Videos
          </RnText>
        </View>

        <RnText
          fontWeight={'600'}
          size="h6.5"
          color={'#000000'}
          textAlign
          margin={[26, 0, 30, 0]}>
          Connect with new people by scanning their QR Code
        </RnText>

        <View style={styles.addProfileWrapper}>
          <View>
            <Image source={AddProfile} style={styles.addProfile} />
            <Image source={AddIcon} style={styles.addIcon} />
          </View>
          <RnText
            fontWeight={'400'}
            size="h6"
            color={'#000000'}
            margin={[0, 0, 0, 20]}>
            Add Profile photo*
          </RnText>
        </View>

        <PhoneNumberPicker />

        <Button Text={'Send Code'} />
        <View>
          <RnText
            fontWeight={'400'}
            size="h6"
            color={'#6F6F6F'}
            margin={[20, 0, 20, 0]}>
            Enter Activation Code
          </RnText>
          <TextInputCustom PlaceHolder={'Enter code here'} />
        </View>
        <View>
          <RnText
            fontWeight={'400'}
            size="h6"
            color={'#6F6F6F'}
            margin={[20, 0, 20, 0]}>
            First Name *
          </RnText>
          <TextInputCustom PlaceHolder={'Enter  code here'} />
        </View>

        <View>
          <RnText
            fontWeight={'400'}
            size="h6"
            color={'#6F6F6F'}
            margin={[20, 0, 0, 0]}>
            Gender
          </RnText>
          <View style={styles.radioButtonWrapper}>
            <RadioButton
              text={'Male'}
              onPress={() => setGender('male')}
              selected={gender == 'male'}
              textStyle={{
                color: '#B6B7B7',
                fontFamily: 'Roboto',
                fontWeight: '400',
                fontSize: 16,
                marginRight: wp(2),
              }}
            />
            <RadioButton
              text={'FeMale'}
              onPress={() => setGender('female')}
              selected={gender == 'female'}
              textStyle={{
                color: '#B6B7B7',
                fontFamily: 'Roboto',
                fontWeight: '400',
                fontSize: 16,
                marginRight: wp(2),
                marginLeft: wp(10),
              }}
            />
          </View>
        </View>

        <Button Text={'Continue'} />

        <View style={styles.needHelp}>
          <RnText
            fontWeight={'400'}
            size="h6"
            color={'#B6B7B7'}
            margin={[0, 0, 0, 0]}>
            I need help
          </RnText>
          <RnText
            fontWeight={'400'}
            size="h6"
            color={'#36335D'}
            margin={[0, 0, 0, 10]}
            cutText>
            Sign Up
          </RnText>
        </View>
        <View>
          <RnText
            fontWeight={'400'}
            size="h6"
            color={'#000000'}
            margin={[30, 0, 0, 0]}
            fontFamily={'Roboto'}
            textAlign>
            Continue to view profiles in your venue
          </RnText>
          <RnText
            fontWeight={'400'}
            size="h6"
            color={'#000000'}
            margin={[0, 0, 0, 0]}
            fontFamily={'Roboto'}
            textAlign>
            Continue to get free drink offers
          </RnText>
          <RnText
            fontWeight={'400'}
            size="h6"
            color={'#000000'}
            margin={[0, 0, 0, 0]}
            fontFamily={'Roboto'}
            textAlign>
            Continue for group & single photos
          </RnText>
          <RnText
            fontWeight={'400'}
            size="h6"
            color={'#000000'}
            margin={[0, 0, 0, 0]}
            fontFamily={'Roboto'}
            textAlign>
            Continue to exchange instagram
          </RnText>
        </View>
        <View style={styles.footer}>
        </View>
      </ScrollView>
    </View>
  );
};

export default HideSeek;
