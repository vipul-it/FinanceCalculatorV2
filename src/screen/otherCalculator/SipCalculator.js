import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CustomTopLayout from '../common/CustomTopLayout';
import {useNavigation} from '@react-navigation/native';
import SubHeading from '../common/SubHeading';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CalculateButton from '../common/CalculateButton';
import {allImages} from '../../utils/images';

const SipCalculator = () => {
  const navigation = useNavigation();

  const [investmentAmount, setInvestmentAmount] = useState('');
  const [expectedReturnRate, setExpectedReturnRate] = useState('');
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');
  const [totalProfit, setTotalProfit] = useState('');
  const [totalReturn, setTotalReturn] = useState('');

  //   Reset data
  const resetData = () => {
    setInvestmentAmount('');
    setExpectedReturnRate('');
    setYears('');
    setMonths('');
    setTotalProfit('');
    setTotalReturn('');
  };

  const handleCalculateButton = () => {
    Keyboard.dismiss();
    calculateSIPReturns();
  };
  const calculateSIPReturns = () => {
    // Validate input values
    if (!investmentAmount || !expectedReturnRate || !years) {
      Alert.alert('Validation Error', 'Please enter investment amount, expected return rate, and number of years.');
      return;
    }

    const investment = parseFloat(investmentAmount);
    const rate = parseFloat(expectedReturnRate);
    const totalYears = parseInt(years);
    const totalMonths = parseInt(months || '0');

    // Validate numeric input
    if (isNaN(investment) || isNaN(rate) || isNaN(totalYears) || isNaN(totalMonths)) {
      Alert.alert(
        'Validation Error',
        'Please enter valid numeric values for investment amount, expected return rate, years, and months.'
      );
      return;
    }

    // Calculate total profit and total return
    const totalMonthsInYears = totalYears * 12 + totalMonths;
    const totalReturnAmount = investment * (Math.pow(1 + rate / 100, totalMonthsInYears) - 1);
    const totalProfitAmount = totalReturnAmount - investment;

    // Update state variables
    setTotalProfit(totalProfitAmount.toFixed(2));
    setTotalReturn(totalReturnAmount.toFixed(2));
  };
  // Calculation end

  return (
    <View className="flex-1">
      <CustomTopLayout
        onPress={() => {
          navigation.goBack();
        }}
        name="SIP Calculator"
      />
      <ScrollView>
        <View className="mx-5 mt-2">
          <SubHeading name="Investment Amount" />
          <KeyboardAwareScrollView>
            <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
              <TextInput
                className="w-full text-blackC"
                value={investmentAmount}
                onChangeText={setInvestmentAmount}
                placeholder="eg. 100000"
                keyboardType="numeric"
              />
              <Text className="text-blackC">&#8377;</Text>
            </View>
          </KeyboardAwareScrollView>
          <SubHeading name="Expected Return Rate (p.a.)" />
          <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
            <TextInput
              className="w-full text-blackC"
              value={expectedReturnRate}
        onChangeText={setExpectedReturnRate}
              placeholder="eg. 8"
              keyboardType="numeric"
            />
            <Text className="text-blackC">&#37;</Text>
          </View>
          <SubHeading name="Time Period" />
          <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
            <TextInput
              className="w-[25%] text-blackC"
              value={years}
              onChangeText={setYears}
              placeholder="Years"
              keyboardType="numeric"
            />
          </View>
          <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
            <TextInput
              className="w-full text-blackC"
              value={months}
              onChangeText={setMonths}
              placeholder="Months"
              keyboardType="numeric"
            />
          </View>

          <View className="flex-row justify-between my-12">
            <CalculateButton
              name="Calculate"
              onPress={handleCalculateButton}
              srcPath={allImages.Calculate}
            />
            <CalculateButton
              name="Reset"
              onPress={resetData}
              srcPath={allImages.Reset}
            />
            <CalculateButton
              name="History"
              onPress={() => {
                navigation.navigate('DiscountHistory');
              }}
              srcPath={allImages.History}
            />
          </View>
        </View>

        <View className="h-[200px] w-full rounded-t-[30px] bg-primaryC py-3">
          <Image
            className="w-[135px] h-[5px] self-center mb-6"
            source={allImages.HomeIndicator}
          />

          <View className="flex-row justify-between mx-10 items-center">
            <Text className="text-whiteC pt-2 text-lg ">Invested Amount</Text>
            <Text className="text-primaryHeading text-lg ">
              &#8377; {investmentAmount}
            </Text>
          </View>
          <View className="flex-row justify-between mx-10 items-center">
            <Text className="text-whiteC pt-2 text-lg ">Total Profit</Text>
            <Text className="text-primaryHeading text-lg ">
              &#8377; {totalProfit}
            </Text>
           
          </View>
          <View className="flex-row justify-between mx-10 items-center">
            <Text className="text-whiteC pt-2 text-lg ">Total Return</Text>
            <Text className="text-primaryHeading text-lg ">
              &#8377; {totalReturn}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SipCalculator;
