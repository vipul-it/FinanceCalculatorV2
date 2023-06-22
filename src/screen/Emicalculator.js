import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomTopLayout from './common/CustomTopLayout';
import {useNavigation} from '@react-navigation/native';
import {allImages} from '../utils/images';
import SubHeading from './common/SubHeading';
import CalculateButton from './common/CalculateButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Emicalculator = () => {
  const navigation = useNavigation();

  const [amount, onChangeAmount] = useState('100000');
  const [rate, onChangeRate] = useState('5');
  const [tenure, onChangeTenure] = useState('2');
  return (
    <>
      <SafeAreaView className="bg-backgroundC flex-1">
        <View>
          <CustomTopLayout
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
            name="EMI Calculator"
          />
        </View>
        <View className="mx-5">
          <View className="flex-row mt-7 ">
            <View className="shadow-inner w-[92px] h-[81px] p-1 justify-center rounded-lg bg-primaryDark items-center mr-2">
              <Image
                className="w-6 h-6"
                style={{tintColor: '#fff'}}
                source={allImages.Home}
              />
              <Text className="text-whiteC">Home</Text>
            </View>
            <View className="shadow-inner w-[92px] h-[81px] p-1 justify-center rounded-lg bg-whiteC items-center mr-2">
              <Image
                className="w-6 h-6"
                style={{tintColor: '#CBCBCB'}}
                source={allImages.Car}
              />
              <Text className="text-secondaryC">Car</Text>
            </View>
            <View className="shadow-inner w-[92px] h-[81px] p-1 justify-center rounded-lg bg-whiteC items-center mr-2">
              <Image
                className="w-6 h-6"
                style={{tintColor: '#CBCBCB'}}
                source={allImages.Profile}
              />
              <Text className="text-secondaryC">Personal</Text>
            </View>
            <View className="shadow-inner w-[92px] h-[81px] p-1 justify-center rounded-lg bg-whiteC items-center mr-2">
              <Image
                className="w-6 h-6"
                style={{tintColor: '#CBCBCB'}}
                source={allImages.Bag}
              />
              <Text className="text-secondaryC">Business</Text>
            </View>
            <View className="shadow-inner w-[92px] h-[81px] p-1 justify-center rounded-lg bg-whiteC items-center mr-2">
              <Image
                className="w-6 h-6"
                style={{tintColor: '#CBCBCB'}}
                source={allImages.MoonProfile}
              />
              <Text className="text-secondaryC">Gold</Text>
            </View>
          </View>

          <View className="my-1">
            <Text></Text>
          </View>
        </View>
        <ScrollView>
          <View className="mx-5">
            <SubHeading name="Home Loan Amount" />
            <KeyboardAwareScrollView>
              <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
                <TextInput
                  className="w-full"
                  onChangeText={onChangeAmount}
                  value={amount}
                  placeholder="eg. 100000"
                  keyboardType="numeric"
                />
                <Text className="text-blackC">&#8377;</Text>
              </View>
            </KeyboardAwareScrollView>
            <SubHeading name="Intrest Rate" />
            <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5">
              <TextInput
                className="w-full"
                onChangeText={onChangeRate}
                value={rate}
                placeholder="eg. 8"
                keyboardType="numeric"
              />
              <Text className="text-blackC">&#37;</Text>
            </View>
            <SubHeading name="Loan Tenure" />
            <KeyboardAwareScrollView>
              <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-5 pr-24">
                <TextInput
                  className="w-full"
                  onChangeText={onChangeTenure}
                  value={tenure}
                  placeholder="eg. 5"
                  keyboardType="numeric"
                />
                <View className="flex-row">
                  <Text className="text-blackC">Year</Text>
                  <Text className="text-primaryDark">/</Text>
                  <Text className="text-grayC">Months</Text>
                </View>
              </View>
            </KeyboardAwareScrollView>

            <View className="flex-row justify-evenly my-12">
              <CalculateButton name="Calculate" srcPath={allImages.Calculate} />
              <CalculateButton name="Reset" srcPath={allImages.Reset} />
              <CalculateButton name="History" srcPath={allImages.History} />
            </View>
          </View>

          <View>
            <View className="h-[400px] w-full rounded-t-[30px] bg-primaryC py-3">
              <Image className="w-[135px] h-[5px] self-center" source={allImages.HomeIndicator} />
              <Text className="text-whiteC pt-2 text-xl text-center">EMI</Text>
              <Text className="text-whiteC text-2xl text-center">
                &#8377; 1,00,000
              </Text>
              <Text className="border-whiteC -mt-4 mb-2 text-2xl text-center border-b-[1px]"></Text>
              <View className="flex-row mr-2 justify-evenly">
                <View>
                  <Text className="text-whiteC text-lg text-center">
                    Principal
                  </Text>
                  <Text className="text-whiteC text-lg text-center">
                    Amount
                  </Text>
                  <Text className="text-whiteC text-xl text-center">0.0</Text>
                </View>
                <Text className="text-whiteC text-lg text-center">+</Text>
                <View>
                  <Text className="text-whiteC text-lg text-center">
                    Interest
                  </Text>
                  <Text className="text-whiteC text-lg text-center">
                    Payable
                  </Text>
                  <Text className="text-whiteC text-xl text-center">0.0</Text>
                </View>
                <Text className="text-whiteC text-lg text-center">=</Text>
                <View>
                  <Text className="text-whiteC text-lg text-center">
                    Total Payment
                  </Text>
                  <Text className="text-whiteC text-lg text-center">
                    Payment
                  </Text>
                  <Text className="text-whiteC text-xl text-center">0.0</Text>
                </View>
              </View>
              <Text className="border-whiteC -mt-4 text-lg text-center border-b-[1px]"></Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Emicalculator;
