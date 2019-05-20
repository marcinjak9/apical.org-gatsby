const YAML = require('yaml')
const fs = require('fs')
const base = require('./models/Sections')

// const y = YAML.stringify(base)

// console.log(y)
class First {
  constructor() {
    this.data = { valid: true }
  }
}
class Base extends First {
  constructor() {
    super()
    this.data.added = true
  }

  toObj() {
    return this.data
  }
}
console.log(new Base().toObj())
// fs.writeFileSync('y.yml', y)
