const Employee = require('../lib/Employee');
const employee = new Employee('christian', '5768098', 'spellstorrian90@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('christian');
    expect(employee.id).toBe('6139025');
    expect(employee.email).toBe('spellstorrian90@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('christian');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('6139025');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('spellstorrian90@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});