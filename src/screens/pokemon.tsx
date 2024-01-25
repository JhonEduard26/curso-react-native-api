import { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { getPokemonById } from '../services'

export const PokemonScreen = ({ route }: any) => {
  const { params } = route
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    getPokemonById(params.name)
      .then((response) => {
        setPokemon(response)
      })
  }, [])

  if (!pokemon) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {pokemon.name}</Text>
      <View style={styles.types}>
        {
          pokemon.types.map(({ type }: any) => (
            <Text
              style={[styles.ship, { backgroundColor: setBackgroundColor(type.name) }]}
              key={type.name}>
              {type.name}
            </Text>
          ))
        }
      </View>
      <Image source={{ uri: pokemon.sprite }} style={{ width: 220, height: 220 }} />
      <View style={styles.abilities}>
        <Text style={styles.titleAbility}>Abilities</Text>
        {
          pokemon.abilities.map(({ ability }: any) => (
            <Text key={ability.name}>{ability.name}</Text>
          ))
        }
      </View>
    </View>
  )
}

const setBackgroundColor = (type: string) => {
  const colorMap: Record<string, string> = {
    bug: 'lime',
    dark: 'black',
    dragon: 'darkblue',
    electric: 'gold',
    fairy: 'pink',
    fighting: 'red',
    fire: 'red',
    flying: 'lightgray',
    ghost: 'purple',
    grass: 'green',
    ground: 'sienna',
    ice: 'lightblue',
    normal: 'gray',
    poison: 'blueviolet',
    psychic: 'tomato',
    rock: 'saddlebrown',
    steel: 'gray',
    water: 'blue',
  };

  return colorMap[type] || 'gray';
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    marginBottom: 16,
    fontSize: 48,
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  types: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    marginBottom: 16
  },
  ship: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 6,
    textTransform: 'capitalize',
    color: 'white',
  },
  titleAbility: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8
  },
  abilities: {

  }
})