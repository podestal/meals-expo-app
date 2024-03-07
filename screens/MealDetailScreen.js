import { View, Text, Image, StyleSheet, ScrollView } from "react-native"

const MealDetailScreen = ({ route }) => {

    const meal = route.params.meal

  return (
    <ScrollView style={styles.mealDetail}>
        <Image style={styles.image} source={{ uri: meal.imageUrl }}/>
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.subTitle}>Ingredients</Text>
        <View style={styles.ingredientsContainer}>
            {meal.ingredients.map(ingredient => <Text key={ingredient}>* {ingredient}</Text>)}
        </View>
        <Text style={styles.subTitle}>Preparation</Text>
        <View style={styles.stepsContainer}>
            {meal.steps.map(step => <Text key={step}>{step}</Text>)}
        </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    mealDetail: {
        padding: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginVertical: 15,
    }, 
    subTitle: {
        width: '100%',
        marginVertical: 25,
        textAlign: 'center',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28,
    },
    ingredientsContainer: {
        textAlign: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    stepsContainer: {
        alignItems: 'left',
        marginBottom: 30
    }
})