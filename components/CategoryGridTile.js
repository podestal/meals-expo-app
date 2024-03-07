import { View, Pressable, Text, StyleSheet } from "react-native"

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={[styles.girdItem, { backgroundColor: color}]}>
        <Pressable style={styles.button}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    girdItem: {
        flex: 1,
        margin: 16,
        height: 150,
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        borderRadius: 40,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})