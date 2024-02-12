
export interface Wizards {
  id : string,
  firstName : string,
  lastName : string
  elixirs : Elixirs[],
}

interface Elixirs{
  id : string,
  name : string
}
