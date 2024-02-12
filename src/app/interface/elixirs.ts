export interface Elixirs {
  id : string,
  name : string,
  effect : string,
  sideEffects : string,
  characteristics : string,
  time : string,
  difficulty : string,
  ingredients : ingredients[],
  inventors : inventors[],
  manufacturer : string
}

export interface ingredients{
  id: string,
  name : string
}

export interface inventors{
  id: string,
  firstName : string,
  lastName : string,
}
