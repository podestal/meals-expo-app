import { View, Text, StyleSheet, FlatList } from "react-native"
import { MEALS } from "../data/data"
import MealItem from "../components/MealItem"

const MealsOverviewScreen = ({ route }) => {

    const categoryId = route.params.categoryId
    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(categoryId) >= 0)

    const renderMealItem = (itemData) => {
        return <MealItem meal={itemData.item}/>
    }

  return (
    <View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={ meal => meal.id} renderItem={renderMealItem}/>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})