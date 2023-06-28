import {View, Text, Image, Alert} from 'react-native';
import React, {useEffect} from 'react';
import TopTwoIcon from './common/TopTwoIcon';
import {useNavigation} from '@react-navigation/native';
import {allImages} from '../utils/images';

const EmiHistory = () => {
  const navigation = useNavigation();

  

  const clearData = async () => {
    try {
      await AsyncStorage.removeItem('loanData');
      setAmount('');
      setInterest('');
      setTenure('');
      setMonthlyEMI('');
      setTotalInterest('');
      setTotalPayment('');
      setLoanAmountPercentage('');
      setTotalInterestPercentage('');
      console.log('Data cleared successfully!');
    } catch (error) {
      console.log('Error clearing data:', error);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('loanData');
      const data = JSON.parse(jsonValue);
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };
  const showAlert = () => {
    Alert.alert('Alert', 'History Clear.');
  };
  return (
    <View className="flex-1 bg-whiteC">
      <TopTwoIcon
        name="History"
        onPressRight={showAlert}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <Text className="py-4"></Text>
      <View className=""><View className="flex-row border-[1px] border-Cgray50 justify-between mx-5 items-center rounded-lg p-3">
        <View>
          <Text className="text-primaryHeading font-semibold ">
            4560 with 5% for 12 months
          </Text>
          <Text className="text-primaryDark font-semibold">
            7 June 2023, 03:07 pm
          </Text>
        </View>
        <View>
          <Image className="w-6 h-6" source={allImages.RightArrowButton} />
        </View>
      </View></View>
      
    </View>
  );
};

export default EmiHistory;
