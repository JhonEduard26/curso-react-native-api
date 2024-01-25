import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { getPokemons } from '../services'
import { PokemonList } from '../components'

export const HomeScreen = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
      .then((response) => {
        setPokemons(response)
      })
  }, [])

  return (
    <View>
      <PokemonList pokemons={pokemons} />
      <StatusBar style="auto" />
    </View>
  )
}

