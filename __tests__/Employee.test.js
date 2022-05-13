const Employee = require('../lib/Employee')

test ("testing name constructor argument",() => {
    var testing = 'Bob'
    var employee = new Employee(testing)
    expect (employee.name).toBe(testing) 
})

test ("testing email constructor argument",() => {
    var testing = 'bob@bob.com'
    var employee = new Employee("Bob", 6, testing)
    expect (employee.email).toBe(testing) 
})

test ("testing employee object",() => {
    var employee = new Employee()
    expect(typeof(employee)).toBe('object')
})

test ("testing getName method",() => {
    var testing = 'Bob'
    var employee = new Employee(testing)
    expect (employee.getName()).toBe(testing) 
})