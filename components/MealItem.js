import { View, Text, Pressable, Image, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native'

const MealItem = ({ meal }) => {

    const navigation = useNavigation()

    const onPressMealItem = () => {
        navigation.navigate('MealDetail', {
            meal: meal,
        })
    }

  return (
    <View style={styles.mealItem}>
        <Pressable
            onPress={onPressMealItem}
        >
            <View>
                <Image style={styles.image} source={{ uri: meal.imageUrl }}/>
                <Text style={styles.title} >{meal.title}</Text>
            </View>
            <View style={styles.details}>
                <Text>{meal.duration}m</Text>
                <Text>{meal.complexity}</Text>
                <Text>{meal.affordability}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        marginVertical: 20,
        borderRadius: 25,
        backgroundColor: '#ecf0f1',
        overflow: 'hidden',
    },
    image: {

        width: '100%',
        height: 200,
        marginVertical: 15,
    }, 
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    details: {
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})