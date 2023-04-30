const Manager = require('../lib/Manager');
const manager = new Manager('joelle', '5768098', 'jdeschat@gmail.com', '821');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('joelle');
    expect(manager.id).toBe('5768098');
    expect(manager.email).toBe('jdeschat@gmail.com');
    expect(manager.officeNumber).toBe('821');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('joelle');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('5768098');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('jdeschat@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('821');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});