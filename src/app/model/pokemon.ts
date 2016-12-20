export interface Pokemon {
  forms: {
    url: string,
    name: string
  },
  abilities: [
    {
      slot: number,
      is_hidden: boolean,
      ability: {
        url: string,
        name: string
      }
    }
    ],
  stats: [
    {
      stat: {
        url: string,
        name: string
      },
      effort: number,
      base_stat: number
    }
    ],
  moves: [
    {
      move: {
        url: string,
        name: string
      }
    }
    ],
  types: [
    {
      slot: number,
      type: {
        url: string,
        name: string
      }
    }
    ],
  name: string,
  sprites: {
    back_default: string,
    front_default: string
  }
}
