// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];

  let isAddingEmployee = true;
  while (isAddingEmployee) {
    const firstName = prompt("Enter employee's first name");
    const lastName = prompt("Enter employee's last name");
    let salary = prompt("Enter employee's salary");
    if (isNaN(salary)) {
      salary = 0;
    } else {
      salary = Number(salary);
    }

    const userInput = prompt("Would you like to add another Employee");
    if (userInput === "no") {
      isAddingEmployee = false;
    }
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    employees.push(employee);
  }
  const average = displayAverageSalary(employees);
  const employeeName = getRandomEmployee(employees);
  console.log(
    `The average between our ${employees.length} employees salary is ${average}`
  );
  console.log(`Congraulation to ${employeeName}, our random weekly winner`);
  return employees;
};
// Display the average salary

const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salary;
  }
  const average = sum / employeesArray.length;

  return average;
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomindex = Math.floor(Math.random() * employeesArray.length);
  return (
    employeesArray[randomindex].firstName +
    " " +
    employeesArray[randomindex].lastName
  );
};

// TODO: Select and display a random employee

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
