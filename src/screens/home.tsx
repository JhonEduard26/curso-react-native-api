import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'

import { getPokemons } from '../services'
import { PokemonList } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'

export const HomeScreen = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons(20)
      .then((response) => {
        setPokemons(response)
      })
  }, [])

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} setPokemons={setPokemons} />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

