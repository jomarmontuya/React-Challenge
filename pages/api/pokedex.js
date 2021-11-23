// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    total: 12,
    entries: [
      {
        number: "1",
        name: "Bulbasaur",
        types: ["Grass", "Poison"],
        image: {
          url: "assets/001.png",
          width: 475,
          height: 475,
        },
      },
      {
        number: "2",
        name: "Ivysaur",
        types: ["Grass", "Poison"],
        image: {
          url: "assets/002.png",
          width: 475,
          height: 475,
        },
      },
      {
        number: "3",
        name: "Venusaur",
        types: ["Grass", "Poison"],
        image: {
          url: "assets/003.png",
          width: 475,
          height: 475,
        },
      },
      {
        number: "4",
        name: "Charmander",
        types: ["Fire"],
        image: {
          url: "assets/004.png",
          width: 475,
          height: 475,
        },
      },
      {
        number: "5",
        name: "Charmeleon",
        types: ["Fire"],
        image: {
          url: "assets/005.png",
          width: 475,
          height: 475,
        },
      },
      {
        number: "6",
        name: "Charizard",
        types: ["Fire"],
        image: {
          url: "assets/006.png",
          width: 475,
          height: 475,
        },
      },
      {
        number: "7",
        name: "Squirtle",
        types: ["Water"],
        image: {
          url: "assets/007.png",
          width: 475,
          height: 475,
        },
      },
      {
        number: "8",
        name: "Wartortle",
        types: ["Water"],
        image: {
          url: "assets/008.png",
          width: 475,
          height: 475,
        },
      },
      {
        number: "9",
        name: "Blastoise",
        types: ["Water"],
        image: {
          url: "assets/009.png",
          width: 475,
          height: 475,
        },
      },
      {
        number: "10",
        name: "Caterpie",
        types: ["Bug"],
        image: {
          url: "assets/010.png",
          width: 475,
          height: 475,
        },
      },
      {
        number: "11",
        name: "Metapod",
        types: ["Bug"],
        image: {
          url: "assets/011.png",
          width: 475,
          height: 475,
        },
      },
      {
        number: "12",
        name: "Butterfree",
        types: ["Bug"],
        image: {
          url: "assets/012.png",
          width: 475,
          height: 475,
        },
      },
    ],
  });
}
