import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

class Home extends Component {
  static navigationOptions = {
    tabBarIcon: () => {
      const homeIcon = <Icon name="home" size={30} color="#900" />;
      return homeIcon
    },
  };
  render(){
    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Rainy Days", "Sunny Days", "Snowy Days"] // optional
    };
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5
    };
    return (
      <View>
        <LineChart
          data={data}
          width={220}
          height={220}
          chartConfig={chartConfig}
        />
        <Text style={styles.homeDetail}> Detail </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeDetail:{
    fontSize:30
  }
})

export default Home