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
} from 'react-native';
import React, {useState} from 'react';
import CustomTopLayout from './common/CustomTopLayout';
import {useNavigation} from '@react-navigation/native';
import {allImages} from '../utils/images';
import SubHeading from './common/SubHeading';
import CalculateButton from './common/CalculateButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {dummyData} from './common/Daymeydata';
import MyChart from './common/DoughnutChart';
import DoughnutChart from './common/DoughnutChart';



// Alert.alert(JSON.stringify(dummyData))

const Emicalculator = () => {
  const navigation = useNavigation();

  const [amount, onChangeAmount] = useState('100000');
  const [rate, onChangeRate] = useState('5');
  const [tenure, onChangeTenure] = useState('2');
  const [selectedcolor, setSelected] = useState(1);
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
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dummyData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor:
                      selectedcolor == item.id ? '#CBCBCB' : '#BDBDBD',
                    width: 100,
                    padding: 10,
                    alignSelf: 'center',
                    borderRadius: 9,
                    marginHorizontal: 15,
                    marginTop: 20,
                    backgroundColor:
                      selectedcolor == item.id ? '#1F3CFE' : '#fff',
                  }}
                  onPress={() => {
                    setSelected(item.id);
                  }}>
                  <Image
                    source={item.url}
                    style={{
                      width: 31,
                      height: 24,
                      alignSelf: 'center',
                      resizeMode: 'contain',
                      tintColor: selectedcolor == item.id ? '#fff' : '#CBCBCB',
                    }}
                  />

                  <Text
                    style={{
                      color: selectedcolor == item.id ? '#fff' : '#CBCBCB',
                      marginVertical: 2,
                      fontSize: 13,
                      fontWeight: 500,
                      alignSelf: 'center',
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
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
                    <Text className="text-grayC">/</Text>
                    <Text className="text-grayC">Months</Text>
                  </View>
                </View>
              </KeyboardAwareScrollView>

              <View className="flex-row justify-evenly my-12">
                <CalculateButton
                  name="Calculate"
                  srcPath={allImages.Calculate}
                />
                <CalculateButton name="Reset" srcPath={allImages.Reset} />
                <CalculateButton
                  name="History"
                  onPress={() => {
                    navigation.navigate('EmiHistory');
                  }}
                  srcPath={allImages.History}
                />
              </View>
            </View>
          ) : selectedcolor == '2' ? (
            <View className="mx-5">
              <SubHeading name="Car Loan Amount" />
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
                    <Text className="text-grayC">/</Text>
                    <Text className="text-grayC">Months</Text>
                  </View>
                </View>
              </KeyboardAwareScrollView>

              <View className="flex-row justify-evenly my-12">
                <CalculateButton
                  name="Calculate"
                  srcPath={allImages.Calculate}
                />
                <CalculateButton name="Reset" srcPath={allImages.Reset} />
                <CalculateButton
                  name="History"
                  onPress={() => {
                    navigation.navigate('EmiHistory');
                  }}
                  srcPath={allImages.History}
                />
              </View>
            </View>
          ) : selectedcolor == '3' ? (
            <View className="mx-5">
              <SubHeading name="Personal Loan Amount" />
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
                    <Text className="text-grayC">/</Text>
                    <Text className="text-grayC">Months</Text>
                  </View>
                </View>
              </KeyboardAwareScrollView>

              <View className="flex-row justify-evenly my-12">
                <CalculateButton
                  name="Calculate"
                  srcPath={allImages.Calculate}
                />
                <CalculateButton name="Reset" srcPath={allImages.Reset} />
                <CalculateButton
                  name="History"
                  onPress={() => {
                    navigation.navigate('EmiHistory');
                  }}
                  srcPath={allImages.History}
                />
              </View>
            </View>
          ) : selectedcolor == '4' ? (
            <View className="mx-5">
              <SubHeading name="Buisiness Loan Amount" />
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
                    <Text className="text-grayC">/</Text>
                    <Text className="text-grayC">Months</Text>
                  </View>
                </View>
              </KeyboardAwareScrollView>

              <View className="flex-row justify-evenly my-12">
                <CalculateButton
                  name="Calculate"
                  srcPath={allImages.Calculate}
                />
                <CalculateButton name="Reset" srcPath={allImages.Reset} />
                <CalculateButton
                  name="History"
                  onPress={() => {
                    navigation.navigate('EmiHistory');
                  }}
                  srcPath={allImages.History}
                />
              </View>
            </View>
          ) : selectedcolor == '5' ? (
            <View className="mx-5">
              <SubHeading name="Gold Loan Amount" />
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
                    <Text className="text-grayC">/</Text>
                    <Text className="text-grayC">Months</Text>
                  </View>
                </View>
              </KeyboardAwareScrollView>

              <View className="flex-row justify-evenly my-12">
                <CalculateButton
                  name="Calculate"
                  srcPath={allImages.Calculate}
                />
                <CalculateButton name="Reset" srcPath={allImages.Reset} />
                <CalculateButton
                  name="History"
                  onPress={() => {
                    navigation.navigate('EmiHistory');
                  }}
                  srcPath={allImages.History}
                />
              </View>
            </View>
         ) : null}
         

          <View>
            <View className="h-[500px] w-full rounded-t-[30px] bg-primaryC py-3">
              <Image
                className="w-[135px] h-[5px] self-center"
                source={allImages.HomeIndicator}
              />
              <Text className="text-whiteC pt-2 text-xl text-center">EMI</Text>
              <Text className="text-whiteC text-2xl text-center">
                &#8377; 1,00,000
              </Text>
              <Text className="border-whiteC mb-4 -mt-4 text-2xl text-center border-b-[0.8px]"></Text>
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
              <Text className="border-whiteC text-lg text-center border-b-[0.8px]"></Text>

              <View className="flex items-center px-8 py-4"><DoughnutChart  /></View>

              <View className="flex-row justify-evenly my-6">
                <CalculateButton
                  name="Details"
                  onPress={() => {
                    navigation.navigate('EmiHistory');
                  }}
                  srcPath={allImages.Calculate}
                />
                
                <CalculateButton
                  name="Share"
                  onPress={() => {
                    navigation.navigate('EmiHistory');
                  }}
                  srcPath={allImages.Share}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Emicalculator;
