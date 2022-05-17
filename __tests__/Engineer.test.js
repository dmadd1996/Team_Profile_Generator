const Engineer = require('../lib/Engineer')

test ("testing git constructor argument",() => {
    var testing = 'bob'
    var engineer = new Engineer('a', 'b', 'c', testing)
    expect (engineer.git).toBe(testing) 
})