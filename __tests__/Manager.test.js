const Manager = require('../lib/Manager')

test ("testing officeNumber constructor argument",() => {
    var testing = 'bob'
    var manager = new Manager('a', 'b', 'c', testing)
    expect (manager.officeNumber).toBe(testing) 
})