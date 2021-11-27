export type Hero = {
  id: number;
  name: string;
  images: {
    sm: string;
    md: string;
  };

  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };

  appearance: {
    gender: string;
    race: string;
    height: string;
    weight: string;
    eyeColor: string;
    hairColor: string;
  };

  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string;
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };

  work: {
    occupation: string;
  };
};
