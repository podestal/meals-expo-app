import { View, Text } from "react-native"

const MealItem = ({ meal }) => {

    console.log(meal.title)

  return (
    <View>
        <Text>{meal.title}</Text>
    </View>
  )
}

export default MealItem