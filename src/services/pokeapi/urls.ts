export const pokeapiUrls = {
  allPokemons: (limit: number, offset: number) => `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  pokemon: (id: string) => `https://pokeapi.co/api/v2/pokemon/${id}`
}