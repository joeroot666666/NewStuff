import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {BarChart, PieChart} from 'react-native-chart-kit';
import {commonFont, Gcolor, wp, hp} from '../../common';
import {Picker} from '@react-native-picker/picker';

const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.2,
  color: (opacity = 1) => `rgba(196, 27, 180, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const datas = [
  {
    name: 'Breakfast',
    population: 200,
    color: Gcolor.breakFast,
    legendFontColor: Gcolor.legendFontColor,
    legendFontSize: 15,
  },
  {
    name: 'Lunch',
    population: 500,
    color: Gcolor.lunch,
    legendFontColor: Gcolor.legendFontColor,
    legendFontSize: 15,
  },

  {
    name: 'Dinner',
    population: 160,
    color: Gcolor.btncolor,
    legendFontColor: Gcolor.legendFontColor,
    legendFontSize: 15,
  },
];

const Graph = () => {
  const [selectedValue, setSelectedValue] = useState('weekly');
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Picker
            selectedValue={selectedValue}
            style={{height: hp(7.5), width: wp(38)}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Daily" value="daily" />
            <Picker.Item label="Weekly" value="weekly" />
            <Picker.Item label="Monthly" value="monthly" />
            <Picker.Item label="Annually" value="annually" />
          </Picker>
        </View>
        <View style={styles.bars}>
          <Text
            style={{
              marginTop: hp(2),
              marginLeft: wp(4),
              fontFamily: commonFont.LRegular,
              fontWeight: 'bold',
              fontSize: commonFont.fs16,
            }}>
            Orders
          </Text>
          <BarChart
            data={data}
            width={300}
            height={260}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            style={{
              alignContent: 'center',
              alignItems: 'center',
              marginTop: hp(3),
            }}
          />
        </View>

        <View style={styles.bars}>
          <Text
            style={{
              marginTop: hp(2),
              marginLeft: wp(4),
              fontFamily: commonFont.LRegular,
              fontWeight: 'bold',
              fontSize: commonFont.fs16,
            }}>
            Order Breakdown
          </Text>
          <PieChart
            data={datas}
            width={300}
            height={220}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'15'}
            //   center={[10, 50]}
            absolute
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Graph;

const styles = StyleSheet.create({
  container: {
    borderColor: '#E2E2EA',
    borderWidth: 2,
    width: '40%',
    borderRadius: 6,
    marginTop: hp(1.7),
    alignSelf: 'flex-end',
    marginRight: wp(4),
  },
  bars: {
    height: hp(52),
    width: wp(87),
    alignSelf: 'center',
    backgroundColor: Gcolor.white,
    borderRadius: 12,
    marginTop: hp(1.7),
  },
});
