import { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { getPokemonById } from '../services'
import { getBackgroundStats, setBackgroundColor } from '../utils'

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
      <Image
        source={{ uri: pokemon.sprite }}
        style={{ width: 220, height: 220 }}
      />
      <View>
        <Text style={styles.titleStats}>Stats</Text>
        {
          pokemon.stats.map(({ base_stat, stat }: any) => {
            return (
              <View key={stat.name} style={styles.stats}>
                <Text style={{ textTransform: 'capitalize' }}>
                  {stat.name}:
                </Text>
                <View style={styles.bgStats}>
                  <Text style={{
                    width: `${base_stat}%`,
                    padding: 2,
                    borderRadius: 4,
                    color: 'white',
                    backgroundColor: getBackgroundStats(base_stat)
                  }}>
                    {base_stat}
                  </Text>
                </View>
              </View>
            )
          })
        }
      </View>
      <Text style={styles.titleAbility}>Abilities</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 6 }}>
        {
          pokemon.abilities.map(({ ability }: any) => (
            <Text
              key={ability.name}
              style={[styles.ship, { backgroundColor: 'midnightblue', flexDirection: 'row' }]}
            >
              {ability.name}
            </Text>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
  titleStats: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bgStats: {
    width: 140,
    marginBottom: 2,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  titleAbility: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8
  },
})