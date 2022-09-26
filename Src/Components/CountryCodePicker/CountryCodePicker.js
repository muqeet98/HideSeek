import React, { useState } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import { styles } from './CountryCodePickerStyles';
import Modal from 'react-native-modal';
import { Countries } from './Countries';
import { hp } from '../../Helpers/Responsiveness';
import { wp } from '../../Helpers/Responsiveness';
import Icon from 'react-native-vector-icons/AntDesign';
import { IPhonePicker } from './interface';
import IconDown from '../../Assets/Icons/IconDown.png';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export const PhoneNumberPicker = props => {
  const { onChange, isError, errorMsg } = props;
  const [isModal, setIsModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'United States',
    dial_code: '+92',
    code: 'US',
    preferred: true,
    flag: ':us:',
  });
  return (
    <View style={[styles.sectionContainer]}>
      <Text
        style={{
          fontFamily: 'Roboto',
          fontWeight: '400',
          fontSize: 15,
          color: '#6F6F6F',
          paddingBottom: hp(1),
        }}>
        Phone No *
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 1,
          marginTop: 5,
          borderRadius: 6,
          borderColor: '#979BB5',
        }}>
        <TouchableOpacity
          style={{
            paddingLeft: wp(5),
            flexDirection: 'row',
            alignItems: 'center',
            width: '24%',
            borderColor: 'grey',
          }}
          onPress={() => setIsModal(true)}>
          <Text style={{ fontSize: wp(5), color: '#C7C4C4' }}>
            {selectedCountry.dial_code + '  '}
          </Text>

          <Image
            source={IconDown}
            style={{ height: wp(3.5), width: wp(3.5), resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter your phone number"
          placeholderTextColor="#C7C4C4"
          style={{
            width: '100%',
            fontSize: wp(4),
            fontFamily: 'Montserrat',
            fontWeight: 'normal',

            borderColor: '#DDDFE2',
            color: 'black',
            ...Platform.select({
              ios: {
                paddingHorizontal: wp(2),
                paddingVertical: hp(1.3),
              },
              android: {},
            }),
          }}
          onChangeText={text => {
            try {
              onChange(selectedCountry, text);
            } catch (e) {
              console.log(e);
            }
          }}
          keyboardType={'number-pad'}
        />
      </View>
      {isError && <Text style={{ color: 'red' }}>{errorMsg}</Text>}
      {!isError && <Text style={{ color: 'red' }}>{errorMsg}</Text>}
      <Modal
        isVisible={isModal}
        onBackButtonPress={() => setIsModal(false)}
        onBackdropPress={() => setIsModal(false)}>
        <View
          style={{
            width: wp(90),
            height: hp(70),
            backgroundColor: 'white',
            borderRadius: wp(2),
            padding: wp(5),
          }}>
          <ScrollView>
            {Countries.map((d, i) => {
              return (
                <View style={{ backgroundColor: 'white' }} key={d.dial_code}>
                  <TouchableOpacity
                    style={{ marginVertical: hp(1), flexDirection: 'row' }}
                    onPress={() => {
                      setSelectedCountry(d);
                      setIsModal(false);
                    }}>
                    <Text>{d.flag + ' ' + d.name}</Text>
                  </TouchableOpacity>
                  <View
                    style={{ height: hp(0.1), backgroundColor: 'lightgrey' }}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};
