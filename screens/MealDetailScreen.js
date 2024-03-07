import { View, Text } from "react-native"

const MealDetailScreen = ({ route }) => {

    const meal = route.params.meal

  return (
    <View>
        <Text>This is the detail screen for meal {meal.id}</Text>
    </View>
  )
}

export default MealDetailScreen