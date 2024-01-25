import { ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import { PokemonCard } from './pokemon-card'
import { getPokemons } from '../../services'

export const PokemonList = ({ pokemons, setPokemons }: any) => {

  const loadMoreItems = () => {
    getPokemons(20, pokemons.length)
      .then((response) => {
        setPokemons([...pokemons, ...response])
      })
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={pokemons}
      keyExtractor={({ id }) => id}
      numColumns={3}
      renderItem={({ item }) => <PokemonCard id={item.id} name={item.name} />}
      showsVerticalScrollIndicator={false}
      onEndReached={loadMoreItems}
      onEndReachedThreshold={0.2}
      ListFooterComponent={
        <ActivityIndicator size="large" style={styles.spinner} />
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10
  },
  spinner: {
    marginTop: 16
  }
})
