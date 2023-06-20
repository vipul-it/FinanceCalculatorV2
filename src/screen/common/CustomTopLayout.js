import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {allImages} from '../../utils/images';

const CustomTopLayout = ({name, onPress}) => {
  return (
    <View className="">
      <View className="h-20 w-full border-0 rounded-b-[70px] bg-primaryC px-8 py-4">
        <View className="flex-row items-center justify-start">
          <View className="">
            <TouchableOpacity onPress={onPress} className="p-5">
              <Image
                className="w-[14px] h-[16px] mr-[8%] "
                source={allImages.BackLeftArrow}
              />
            </TouchableOpacity>
          </View>
          <View className="flex ">
            <Text className="text-whiteC text-2xl font-bold ">{name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomTopLayout;
