import {View, Text, Image, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import CustomTopLayout from './common/CustomTopLayout';
import {useNavigation} from '@react-navigation/native';
import {allImages} from '../utils/images';
import SubHeading from './common/SubHeading';
import CalculateButton from './common/CalculateButton';

const Emicalculator = () => {
  const navigation = useNavigation();
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
            <View className="shadow-inner w-[92px] h-[81px] p-5 rounded-lg bg-primaryDark items-center mr-2">
              <Image
                className="w-6 h-6"
                style={{tintColor: '#fff'}}
                source={allImages.Home}
              />
              <Text className="text-whiteC">Home</Text>
            </View>
            <View className="shadow-inner w-[92px] h-[81px] p-5 rounded-lg bg-whiteC items-center mr-2">
              <Image
                className="w-6 h-6"
                style={{tintColor: '#CBCBCB'}}
                source={allImages.Car}
              />
              <Text className="text-secondaryC">Car</Text>
            </View>
            <View className="shadow-inner w-[92px] h-[81px] p-5 rounded-lg bg-whiteC items-center mr-2">
              <Image
                className="w-6 h-6"
                style={{tintColor: '#CBCBCB'}}
                source={allImages.Profile}
              />
              <Text className="text-secondaryC">Personal</Text>
            </View>
            <View className="shadow-inner w-[92px] h-[81px] p-5 rounded-lg bg-whiteC items-center mr-2">
              <Image
                className="w-6 h-6"
                style={{tintColor: '#CBCBCB'}}
                source={allImages.Bag}
              />
              <Text className="text-secondaryC">Business</Text>
            </View>
            <View className="shadow-inner w-[92px] h-[81px] p-5 rounded-lg bg-whiteC items-center mr-2">
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
          <SubHeading name="Home Loan Amount" />
          <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-3">
            <TextInput placeholder="eg. 100000" />
            <Text className="text-blackC">&#8377;</Text>
          </View>
          <SubHeading name="Intrest Rate" />
          <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-3">
            <TextInput placeholder="eg. 8" />
            <Text className="text-blackC">&#37;</Text>
          </View>
          <SubHeading name="Loan Tenure" />
          <View className=" my-2 border-[1.5px] border-inputBorderColor rounded-lg flex-row items-center justify-between px-3">
            <TextInput placeholder="eg. 5" />
            <Text className="text-blackC">Year/Months</Text>
          </View>
          <View className="flex-row justify-evenly my-12">
            <CalculateButton name="Calculate" srcPath={allImages.Calculate} />
            <CalculateButton name="Reset" srcPath={allImages.Reset} />
            <CalculateButton name="History" srcPath={allImages.History} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Emicalculator;
