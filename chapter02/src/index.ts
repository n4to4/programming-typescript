let c: {
  firstName: string
  lastName: string
} = {
  firstName: 'john',
  lastName: 'wick'
}

class Person {
  constructor(
    public firstName: string,
    public lastName: string
  ) { }
}

c = new Person('matt', 'smith')
//console.log(c)

//---

let a: {
  b: number
  c?: string
  [key: number]: boolean
}
a = { b: 1 }
a = { b: 1, c: undefined }
a = { b: 1, 10: true, 20: false }
//a = { 10: true }
//a = { b: 1, 33: 'red' }

{
  let as: readonly number[] = [1, 2, 3]
  let bs: readonly number[] = as.concat(4)
  console.log(bs)
}
