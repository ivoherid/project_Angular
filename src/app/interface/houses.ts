export interface Houses {
  id: string,
  name: string,
  houseColours: string,
  founder: string,
  animal: string,
  element: string,
  ghost: string,
  commonRoom: string,
  heads : Heads[],
  traits : Traits[]
}

interface Heads{
  id: string,
  firstName : string,
  lastName : string
}

interface Traits{
  id: string,
  name : string
}
