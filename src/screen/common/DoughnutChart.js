import React from 'react';
import {View} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

// Sample data for the doughnut chart
const data = [
  {
    name: 'Data 1',
    population: 20,
    color: '#1F3CFE',
    legendFontColor: '#1F3CFE',
    legendFontSize: 15,
  },
  {
    name: 'Data 2',
    population: 80,
    color: '#00107B',
    legendFontColor: '#00107B',
    legendFontSize: 15,
  },
];

const DoughnutChart = () => {
  return (
    <View>
      <PieChart
        data={data}
        width={150}
        height={150}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          paddingRight:25,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="25"
        
      />
    </View>
  );
};

export default DoughnutChart;
