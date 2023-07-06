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
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomTopLayout from '../common/CustomTopLayout';
import {allImages} from '../../utils/images';
import CalculateButton from '../common/CalculateButton';
import SubHeading from '../common/SubHeading';

// Alert.alert(JSON.stringify(dummyData))

const InterestCalculator = () => {
  const navigation = useNavigation();

  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [monthlyEMI, setMonthlyEMI] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [totalPayment, setTotalPayment] = useState('');
  const [loanAmountPercentage, setLoanAmountPercentage] = useState('');
  const [totalInterestPercentage, setTotalInterestPercentage] = useState('');

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
      title: 'Period',

      id: 1,
    },
    {
      title: 'Date',

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
            name="Interest Calculator"
          />
        </View>
        <View className="mx-[27%]  mt-[20px]">
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
                      width: 85,
                      height: 35,
                      alignSelf: 'center',
                      justifyContent: 'center',
                      borderRadius: 5,
                      // marginHorizontal: 15,
                      // marginTop: 40,
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

          <View className="my-1">
            <Text></Text>
          </View>
        </View>
        <ScrollView>
          {selectedcolor == '1' ? (
            <View className="mx-5">
              <SubHeading name="Amount" />
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
              <SubHeading name="Intrest Rate" />
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
              <SubHeading name="Compound Interval" />
              <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
                <TextInput
                  className="w-full text-blackC"
                  value={interest}
                  onChangeText={text => setInterest(text)}
                  placeholder="None"
                  keyboardType="numeric"
                />
              </View>
              <SubHeading name="Time Period" />
              <KeyboardAwareScrollView>
                <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5 pr-16">
                  <TextInput
                    className="w-full text-blackC"
                    value={tenure}
                    onChangeText={text => setTenure(text)}
                    placeholder="eg. 5"
                    keyboardType="numeric"
                  />
                  <View className="flex-row">
                    <Text className="text-blackC">Years</Text>
                  </View>
                </View>
              </KeyboardAwareScrollView>
              <KeyboardAwareScrollView>
                <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5 pr-16">
                  <TextInput
                    className="w-full text-blackC"
                    value={tenure}
                    onChangeText={text => setTenure(text)}
                    placeholder="eg. 3"
                    keyboardType="numeric"
                  />
                  <View className="flex-row">
                    <Text className="text-blackC">Months</Text>
                  </View>
                </View>
              </KeyboardAwareScrollView>
            </View>
          ) : selectedcolor == '2' ? (
            <View className="mx-5">
              <SubHeading name="Amount" />
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
              <SubHeading name="Intrest Rate" />
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
              <SubHeading name="Compound Interval" />
              <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
                <TextInput
                  className="w-full text-blackC"
                  value={interest}
                  onChangeText={text => setInterest(text)}
                  placeholder="None"
                  keyboardType="numeric"
                />
              </View>
              <SubHeading name="From Date" />
              <KeyboardAwareScrollView>
                <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5 pr-8">
                  <TextInput
                    className="w-full text-blackC"
                    value={tenure}
                    onChangeText={text => setTenure(text)}
                    placeholder="DD-MM-YYYY"
                    keyboardType="numeric"
                  />
                  <View className="flex-row">                
                    <Image className="w-[15px] h-[15px]" source={allImages.Calender} />
                  </View>
                </View>
              </KeyboardAwareScrollView>
              <SubHeading name="To Date" />
              <KeyboardAwareScrollView>
                <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5 pr-8">
                  <TextInput
                    className="w-full text-blackC"
                    value={tenure}
                    onChangeText={text => setTenure(text)}
                    placeholder="DD-MM-YYYY"
                    keyboardType="numeric"
                  />
                  <View className="flex-row">                
                    <Image className="w-[15px] h-[15px]" source={allImages.Calender} />
                  </View>
                </View>
              </KeyboardAwareScrollView>
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
            <View className="h-[240px] w-full rounded-t-[30px] bg-primaryC py-3">
              <Image
                className="w-[135px] h-[5px] self-center mb-6"
                source={allImages.HomeIndicator}
              />
              <View className="flex-row justify-between items-center mx-10 ">
                <Text className="text-whiteC pt-2 text-lg ">
                  Principle Amount
                </Text>
                <Text className="text-primaryHeading text-lg ">&#8377; {}</Text>
              </View>
              <View className="flex-row justify-between items-center mx-10">
                <Text className="text-whiteC pt-2 text-lg ">
                  Total Interest
                </Text>
                <Text className="text-primaryHeading text-lg ">&#8377; {}</Text>
              </View>
              <View className="flex-row justify-between items-center mx-10">
                <Text className="text-whiteC pt-2 text-lg ">Total Amount</Text>
                <Text className="text-primaryHeading text-lg ">&#8377; {}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default InterestCalculator;
