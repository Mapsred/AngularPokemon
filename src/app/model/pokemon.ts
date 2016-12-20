export interface Pokemon {
  forms: {
    url: string,
    name: string
  },
  abilities: {
    slot: number,
    is_hidden: boolean,
    ability: {
      url: string,
      name: string
    }
  },
  name: string,
  sprites: {
    back_default: string,
    front_default: string
  }
}
