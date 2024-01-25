export const setBackgroundColor = (type: string) => {
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