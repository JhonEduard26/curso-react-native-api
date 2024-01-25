import { FlatList, StyleSheet } from 'react-native'
import { PokemonCard } from './pokemon-card'

export const PokemonList = ({ pokemons }: any) => {

  const loadMoreItems = () => {
    console.log('load more items...')
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
    />
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10
  }
})
