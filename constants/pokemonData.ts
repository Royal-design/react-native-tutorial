export const pokemonData = [
  {
    name: "Charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    type: "fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl"],
    weakness: ["water", "ground", "rock"],
  },
  {
    name: "Bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type: "grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl"],
    weakness: ["fire", "ice", "flying", "psychic"],
  },
  {
    name: "Squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    type: "water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip"],
    weakness: ["electric", "grass"],
  },
  {
    name: "Pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    type: "electric",
    hp: 35,
    moves: ["Quick Attack", "Thunder Shock", "Tail Whip"],
    weakness: ["ground"],
  },
  {
    name: "Jigglypuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    type: "fairy",
    hp: 115,
    moves: ["Sing", "Pound", "Double Slap"],
    weakness: ["steel", "poison"],
  },
  {
    name: "Meowth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    type: "normal",
    hp: 40,
    moves: ["Scratch", "Bite", "Pay Day"],
    weakness: ["fighting"],
  },
];

export const pokemonSections = [
  {
    title: "Fire",
    data: [
      {
        id: 1,
        name: "Charmander",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        type: "fire",
        hp: 39,
        moves: ["Scratch", "Ember"],
        weakness: ["water", "ground"],
      },
      {
        id: 2,
        name: "Vulpix",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        type: "fire",
        hp: 38,
        moves: ["Ember", "Quick Attack"],
        weakness: ["water", "rock"],
      },
    ],
  },
  {
    title: "Water",
    data: [
      {
        id: 3,
        name: "Squirtle",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        type: "water",
        hp: 44,
        moves: ["Tackle", "Water Gun"],
        weakness: ["electric", "grass"],
      },
      {
        id: 4,
        name: "Psyduck",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
        type: "water",
        hp: 50,
        moves: ["Scratch", "Water Gun"],
        weakness: ["electric", "grass"],
      },
    ],
  },
  {
    title: "Electric",
    data: [
      {
        id: 5,
        name: "Pikachu",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        type: "electric",
        hp: 35,
        moves: ["Thunder Shock", "Quick Attack"],
        weakness: ["ground"],
      },
      {
        id: 6,
        name: "Magnemite",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
        type: "electric",
        hp: 25,
        moves: ["Thunder Shock", "Tackle"],
        weakness: ["ground"],
      },
    ],
  },
];
