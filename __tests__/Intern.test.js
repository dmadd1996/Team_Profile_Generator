const Intern = require('../lib/Intern')

test ("testing school constructor argument",() => {
    var testing = 'bob'
    var intern = new Intern('a', 'b', 'c', testing)
    expect (intern.school).toBe(testing) 
})