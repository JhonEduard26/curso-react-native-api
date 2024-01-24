import { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { getPokemons } from '../services'

export const HomeScreen = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
      .then((response) => {
        setPokemons(response)
      })
  }, [])

  return (
    <ScrollView>
      <View>
        {
          pokemons.map(({id, name}) => (
            <Text key={id}>
              {name}
            </Text>
          ))
        }
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  )
}