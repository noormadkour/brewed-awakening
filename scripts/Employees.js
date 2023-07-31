import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li
                    data-type="employee"
                    data-employeeid="${employee.id}"
                    data-name="${employee.name}"
                    >${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};

document.addEventListener("click", (employeeClick) => {
  const clickedEmployee = employeeClick.target;
  const orders = getOrders();
  let counter = 0;
  if (clickedEmployee.dataset.type === "employee") {
    for (const order of orders) {
      if (order.employeeId === parseInt(clickedEmployee.dataset.employeeid)) {
        counter++;
      }
    }
    window.alert(`${clickedEmployee.dataset.name} sold ${counter} products`);
  }
});
