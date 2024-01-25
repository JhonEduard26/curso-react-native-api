import { useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet } from 'react-native'
import { Image, Text, View } from 'react-native'

interface Props {
  id: number,
  name: string
}

export const PokemonCard = ({id, name}: Props) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Pokemon', { id, name })}

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.order}>#{id}</Text>
        <Text style={styles.title}>{name}</Text>
        <Image
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` }}
          style={{ width: 115, height: 115 }}
        />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightskyblue',
    borderRadius: 8,
    borderWidth: 2,
    margin: 8,
  },
  order: {
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'capitalize',
    textAlign: 'center'
  }
})