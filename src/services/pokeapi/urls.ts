export const pokeapiUrls = {
  allPokemons: (limit: number, offset: number) => `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  pokemon: (id: string) => `https://pokeapi.co/api/v2/pokemon/${id}`
}