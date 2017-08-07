class Situation {
  military: number;
  gold: number;
  wonder: number;
  culture: number;
  trade: number;
  guild: number;
  science: number;
}

type Side = 'a' | 'b';

class City {
  name: string;
  side: Side;
}

export class Player {
  name: string;
  city: City;
  situation: Situation;
}

class Game {
  players: Player[];
}

export class Table {
  _id: string;
  game: Game;
  description: string;
  created_at: Date;
  updated_at: Date;
}
