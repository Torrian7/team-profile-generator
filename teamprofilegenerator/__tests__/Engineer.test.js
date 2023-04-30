const Engineer = require('../lib/Engineer');
const engineer = new Engineer('joelle', '5768098', 'jdeschat@gmail.com', 'jdeschat');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('joelle');
    expect(engineer.id).toBe('5768098');
    expect(engineer.email).toBe('jdeschat@gmail.com');
    expect(engineer.githubUsername).toBe('jdeschat');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('joelle');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('5768098');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('jdeschat@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('jdeschat');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});