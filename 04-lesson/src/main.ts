// Type Aliases
type stringOrNumber = string | number

type Guitarist = {
  name: string;
  active?: boolean,
  albums: (string | number)[]
}