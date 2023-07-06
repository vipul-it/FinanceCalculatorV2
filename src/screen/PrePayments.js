import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
  FlatList,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import CustomTopLayout from './common/CustomTopLayout';
import {allImages} from '../utils/images';
import SubHeading from './common/SubHeading';
import CalculateButton from './common/CalculateButton';

const PrePayments = () => {
  const navigation = useNavigation();

  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [monthlyEMI, setMonthlyEMI] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [totalPayment, setTotalPayment] = useState('');
  const [loanAmountPercentage, setLoanAmountPercentage] = useState('');
  const [totalInterestPercentage, setTotalInterestPercentage] = useState('');

  const [value, setValue] = useState(0);
  const renderItem = item => {
    return (
      <View>
        <Text className="my-4 px-3">{item.label}</Text>
        {item.value === value}
      </View>
    );
  };

  const resetData = () => {
    setAmount('');
    setInterest('');
    setTenure('');
    setMonthlyEMI('');
    setTotalInterest('');
    setTotalPayment('');
    setLoanAmountPercentage(0);
    setTotalInterestPercentage(0);
  };

  const dummyData = [
    {
      title: 'Pre payment',
      id: 1,
    },
    {
      title: 'ROI Change',
      id: 2,
    },
  ];

  const handleCalculateButton = () => {
    // Validate input values
    if (!amount || !interest || !tenure) {
      Alert.alert('Validation Error', 'Please enter empty fields.');
      return;
    }
  };

  const [selectedcolor, setSelected] = useState(1);

  return (
    <>
      <SafeAreaView className="bg-backgroundC flex-1">
        <View>
          <CustomTopLayout
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
            name="Revised EMI & Tenure"
          />
        </View>
        <View className="mt-[20px] flex justify-center items-center">
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dummyData}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor:
                        selectedcolor == item.id ? '#CBCBCB' : '#BDBDBD',
                      width: 90,
                      height: 35,
                      alignSelf: 'center',
                      justifyContent: 'center',
                      borderRadius: 5,
                      backgroundColor:
                        selectedcolor == item.id ? '#1F3CFE' : '#fff',
                    }}
                    onPress={() => {
                      setSelected(item.id);
                    }}>
                    <Text
                      style={{
                        color: selectedcolor == item.id ? '#fff' : '#CBCBCB',
                        fontSize: 13,
                        fontWeight: 500,
                        alignSelf: 'center',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />

          <View className="mt-0.5">
            <Text></Text>
          </View>
        </View>
        <ScrollView>
          {selectedcolor == '1' ? (
            <View className="mx-5">
              <SubHeading name="Outstanding Amount" />
              <KeyboardAwareScrollView>
                <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
                  <TextInput
                    className="w-full text-blackC"
                    value={amount}
                    onChangeText={text => setAmount(text)}
                    placeholder="eg. 100000"
                    keyboardType="numeric"
                  />
                  <Text className="text-blackC">&#8377;</Text>
                </View>
              </KeyboardAwareScrollView>
              <SubHeading name="Current Intrest Rate" />
              <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
                <TextInput
                  className="w-full text-blackC"
                  value={interest}
                  onChangeText={text => setInterest(text)}
                  placeholder="eg. 8"
                  keyboardType="numeric"
                />
                <Text className="text-blackC">&#37;</Text>
              </View>

              <SubHeading name="Current EMI" />
              <KeyboardAwareScrollView>
                <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
                  <TextInput
                    className="w-full text-blackC"
                    value={amount}
                    onChangeText={text => setAmount(text)}
                    placeholder="eg. 100000"
                    keyboardType="numeric"
                  />
                  <Text className="text-blackC">&#8377;</Text>
                </View>
              </KeyboardAwareScrollView>
              <SubHeading name="Pre-Payment Amount" />
              <KeyboardAwareScrollView>
                <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
                  <TextInput
                    className="w-full text-blackC"
                    value={amount}
                    onChangeText={text => setAmount(text)}
                    placeholder="eg. 100000"
                    keyboardType="numeric"
                  />
                  <Text className="text-blackC">&#8377;</Text>
                </View>
              </KeyboardAwareScrollView>
            </View>
          ) : selectedcolor == '2' ? (
            <View className="mx-5">
              <SubHeading name="Outstanding Amount" />
              <KeyboardAwareScrollView>
                <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
                  <TextInput
                    className="w-full text-blackC"
                    value={amount}
                    onChangeText={text => setAmount(text)}
                    placeholder="eg. 100000"
                    keyboardType="numeric"
                  />
                  <Text className="text-blackC">&#8377;</Text>
                </View>
              </KeyboardAwareScrollView>
              <SubHeading name="Current Intrest Rate" />
              <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
                <TextInput
                  className="w-full text-blackC"
                  value={interest}
                  onChangeText={text => setInterest(text)}
                  placeholder="eg. 8"
                  keyboardType="numeric"
                />
                <Text className="text-blackC">&#37;</Text>
              </View>

              <SubHeading name="Current EMI" />
              <KeyboardAwareScrollView>
                <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
                  <TextInput
                    className="w-full text-blackC"
                    value={amount}
                    onChangeText={text => setAmount(text)}
                    placeholder="eg. 100000"
                    keyboardType="numeric"
                  />
                  <Text className="text-blackC">&#8377;</Text>
                </View>
              </KeyboardAwareScrollView>
              <SubHeading name="Revised Intrest Rate" />
              <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
                <TextInput
                  className="w-full text-blackC"
                  value={interest}
                  onChangeText={text => setInterest(text)}
                  placeholder="eg. 8"
                  keyboardType="numeric"
                />
                <Text className="text-blackC">&#37;</Text>
              </View>
            </View>
          ) : null}

          <View className="flex-row justify-evenly my-12">
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
          </View>

          <View>
            <View className="h-800px] w-full rounded-t-[30px] bg-primaryC py-3">
              <Text className="text-whiteC py-4 text-[12px] text-center">
                If you want to change EMI then
              </Text>

              <View className="flex-row mr-2 justify-evenly">
                <View>
                  <Text className="text-whiteC text-lg text-center">
                    New EMI
                  </Text>
                  <Text className="text-primaryDark text-lg text-center">
                    &#8377; 0.0
                  </Text>
                </View>

                <View>
                  <Text className="text-whiteC text-lg text-center">
                    Old EMI
                  </Text>
                  <Text className="text-primaryDark text-lg text-center">
                    &#8377; 0.0
                  </Text>
                </View>

                <View>
                  <Text className="text-whiteC text-lg text-center">
                    Difference
                  </Text>
                  <Text className="text-primaryDark text-lg text-center">
                    &#8377; 0.0
                  </Text>
                </View>
              </View>
              <Text className="border-whiteC  text-center border-b-[1px]"></Text>
              <Text className="text-whiteC py-4 text-[12px] text-center">
                If you want to change Tenure then
              </Text>

              <View className="flex-row mr-2 justify-evenly">
                <View>
                  <Text className="text-whiteC text-lg text-center">
                    New Tenure
                  </Text>
                  <Text className="text-primaryDark text-lg text-center">
                    0 Months
                  </Text>
                </View>

                <View>
                  <Text className="text-whiteC text-lg text-center">
                    Old Tenure
                  </Text>
                  <Text className="text-primaryDark text-lg text-center">
                    0 Months
                  </Text>
                </View>

                <View>
                  <Text className="text-whiteC text-lg text-center">
                    Difference
                  </Text>
                  <Text className="text-primaryDark text-lg text-center">
                    0 Months
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PrePayments;
