const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
function collectEmployeeInfo() {
    return inquirer.prompt([
      // Add prompts for employee information here
    ]);
  }
  function generateHTML(employeeData) {
    // Generate HTML markup using template literals
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Software Engineering Team</title>
        </head>
        <body>
          <!-- Display summaries for each employee -->
        </body>
      </html>
    `;
  
    // Write the HTML to a file
    fs.writeFileSync('team.html', html);
  }
  collectEmployeeInfo()
  .then(employeeData => {
    generateHTML(employeeData);
    console.log('HTML webpage generated successfully!');
  })
  .catch(error => console.error('Error:', error));
// Import the necessary modules
const fs = require('fs');
const inquirer = require('inquirer');

// Function to prompt user for employee information
function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter employee name:',
    },
    {
      type: 'input',
      name: 'role',
      message: 'Enter employee role:',
    },
    // Add other prompts for additional employee details here
  ]);
}

// Function to generate the HTML page
function generateHTML(employees) {
  // Define the HTML markup
  const html = `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Software Engineering Team</title>
        <link rel="stylesheet" href="styles.css">
        <!-- Add any other CSS or meta tags here -->
      </head>
      <body>
        <div class="container">
          <h1>Software Engineering Team</h1>
          <ul>
            ${employees.map(employee => `
              <li>
                <h2>${employee.name}</h2>
                <p><strong>Role:</strong> ${employee.role}</p>
                <!-- Add other employee details here -->
              </li>
            `).join('')}
          </ul>
        </div>
      </body>
    </html>
  `;  
  
 // Write the HTML markup to a file
  fs.writeFileSync('team.html', html, 'utf8');
}

// Example employee data
const employees = [];

// Prompt user for employee information
promptUser()
  .then(employee => {
    employees.push(employee);
    // Add other employee details to the employee object

    // Call the function with the employee data
    generateHTML(employees);
  })
  .catch(err => console.error(err));
