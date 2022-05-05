const Employee = require('../lib/Employee')

test ("testing name constructor argument",() => {
    var testing = 'Bob'
    var employee = new Employee(testing)
    expect (employee.name).toBe(testing) 
})