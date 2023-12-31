import {View, Text, TextInput, Button, ScrollView, Image, Keyboard} from 'react-native';
import React, {useState} from 'react';
import CustomTopLayout from '../common/CustomTopLayout';
import {useNavigation} from '@react-navigation/native';
import SubHeading from '../common/SubHeading';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CalculateButton from '../common/CalculateButton';
import {allImages} from '../../utils/images';

const TipCalculator = () => {
  const navigation = useNavigation();

  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [nofPeople, setNofPeople] = useState('');
  const [tipAmount, setTipAmount] = useState('');
  const [totalBill, setTotalBill] = useState('');
  const [perPersonBill, setPerPersonBill] = useState('');
  const [billAmountError, setBillAmountError] = useState('');
  const [tipPercentageError, setTipPercentageError] = useState('');
  const [nofPeopleError, setNofPeopleError] = useState('');

  //   billAmount, tipPercentage, nofPeople, tipAmount, totalBill

  //   Reset data

  const resetData = () => {
    setBillAmount('');
    setTipPercentage('');
    setNofPeople('');
    setTipAmount('');
    setTotalBill('');
    setPerPersonBill('');
  };

  // Calculation start
  const calculateBill = () => {
    // Hide the keyboard
    Keyboard.dismiss();
    // Reset error messages
    setBillAmountError('');
    setTipPercentageError('');
    setNofPeopleError('');

    // Validate input values
    if (!billAmount) {
      setBillAmountError('Bill Amount is required');
      return;
    }

    if (!tipPercentage) {
      setTipPercentageError('Tip Percentage is required');
      return;
    }

    if (!nofPeople) {
      setNofPeopleError('Number of People is required');
      return;
    }

    // Convert input values to numbers
    const amount = parseFloat(billAmount);
    const tipPercent = parseFloat(tipPercentage);
    const peopleCount = parseInt(nofPeople);

    // Calculate tip amount and total bill
    const tip = (amount * tipPercent) / 100;
    const total = amount + tip;

    // Calculate per-person bill
    const perPerson = total / peopleCount;

    // Update state variables
    setTipAmount(tip.toFixed(2));
    setTotalBill(total.toFixed(2));
    setPerPersonBill(perPerson.toFixed(2));
  };
  // Calculation end

  return (
    <View className="flex-1">
      <CustomTopLayout
        onPress={() => {
          navigation.goBack();
        }}
        name="TIP Calculator"
      />
      <ScrollView>
        <View className="mx-5 mt-2">
          <SubHeading name="Bill Amount" />
          <KeyboardAwareScrollView>
            <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
              <TextInput
                className="w-full text-blackC"
                value={billAmount}
                onChangeText={text => setBillAmount(text)}
                placeholder="eg. 100000"
                keyboardType="numeric"
              />
              <Text className="text-blackC">&#8377;</Text>
            </View>
            {billAmountError ? (
              <Text style={{color: 'red'}}>{billAmountError}</Text>
            ) : null}
          </KeyboardAwareScrollView>
          <SubHeading name="Tip Percentage" />
          <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
            <TextInput
              className="w-full text-blackC"
              value={tipPercentage}
              onChangeText={text => setTipPercentage(text)}
              placeholder="eg. 8"
              keyboardType="numeric"
            />
            <Text className="text-blackC">&#37;</Text>
          </View>
          {tipPercentageError ? (
            <Text style={{color: 'red'}}>{tipPercentageError}</Text>
          ) : null}
          <SubHeading name="Number of People" />
          <KeyboardAwareScrollView>
            <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5 pr-24">
              <TextInput
                className="w-full text-blackC"
                value={nofPeople}
                onChangeText={text => setNofPeople(text)}
                placeholder="eg. 5"
                keyboardType="numeric"
              />
              <View className="flex-row">
                <Text className="text-blackC"></Text>
              </View>
            </View>

            {nofPeopleError ? (
              <Text style={{color: 'red'}}>{nofPeopleError}</Text>
            ) : null}
          </KeyboardAwareScrollView>
          <View className="flex-row justify-evenly my-12">
            <CalculateButton
              name="Calculate"
              onPress={calculateBill}
              srcPath={allImages.Calculate}
            />
            <CalculateButton
              name="Reset"
              onPress={resetData}
              srcPath={allImages.Reset}
            />
            {/* <CalculateButton
              name="History"
              onPress={() => {
                navigation.navigate('TipHistory');
              }}
              srcPath={allImages.History}
            /> */}
          </View>

          {/* <Text>Tip Amount: {tipAmount}</Text>
        <Text>Per Person Bill: {perPersonBill}</Text>
        <Text>Bill Amount: {billAmount}</Text>
        <Text>Total Bill: {totalBill}</Text> */}
        </View>

        <View className="h-[240px] w-full rounded-t-[30px] bg-primaryC py-3">
          <Image
            className="w-[135px] h-[5px] self-center mb-6"
            source={allImages.HomeIndicator}
          />
          <View className="flex-row justify-between items-center mx-10 ">
            <Text className="text-whiteC pt-2 text-lg ">Tip</Text>
            <Text className="text-primaryHeading text-lg ">
              &#8377; {tipAmount}
            </Text>
          </View>
          <View className="flex-row justify-between items-center mx-10">
            <Text className="text-whiteC pt-2 text-lg ">Per Person Bill</Text>
            <Text className="text-primaryHeading text-lg ">
              &#8377; {perPersonBill}
            </Text>
          </View>
          <View className="flex-row justify-between items-center mx-10">
            <Text className="text-whiteC pt-2 text-lg ">Bill Amount</Text>
            <Text className="text-primaryHeading text-lg ">
              &#8377; {billAmount}
            </Text>
          </View>
          <View className="flex-row justify-between items-center mx-10">
            <Text className="text-whiteC pt-2 text-lg ">Total Bill</Text>
            <Text className="text-primaryHeading text-lg ">
              &#8377; {totalBill}
            </Text>
          </View>

          
        </View>
      </ScrollView>
    </View>
  );
};

export default TipCalculator;
