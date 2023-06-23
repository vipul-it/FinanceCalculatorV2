import {View, Text, Image} from 'react-native';
import React from 'react';
import TopTwoIcon from './common/TopTwoIcon';
import {useNavigation} from '@react-navigation/native';
import {allImages} from '../utils/images';

const EmiHistory = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-whiteC">
      <TopTwoIcon
        name="History"
        onPressRight={() => {
          navigation.navigate('Emicalculator');
        }}
      />
      <Text className="py-4"></Text>
      <View className="flex-row border-b-primaryHeading justify-between mx-5 items-center rounded-lg p-3">
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
      </View>
    </View>
  );
};

export default EmiHistory;
