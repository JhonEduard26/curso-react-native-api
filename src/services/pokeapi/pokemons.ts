import { pokeapiUrls } from './urls'

export const getPokemons = async (limit = 151, offset = 0) => {
  try {
    if (offset > 140) {
      return []
    }

    const apiUrl = pokeapiUrls.allPokemons(limit, offset)
    const response = await fetch(apiUrl)

    const data = await response.json()

    const pokemons = data.results.map((pokemon: any) => (
      {
        id: pokemon.url.split('/')[6],
        name: pokemon.name,
        isFav: false
      }
    ))
    return pokemons
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getPokemonById = async (id: string) => {
  try {
    const apiUrl = pokeapiUrls.pokemon(id)
    const response = await fetch(apiUrl)

    const data = await response.json()

    const pokemon = {
      abilities: data.abilities,
      id: data.id,
      name: data.name,
      sprite: data.sprites.other['official-artwork'].front_default,
      stats: data.stats,
      types: data.types,
    }

    return pokemon
  } catch (error) {
    console.error(error)
  }
}