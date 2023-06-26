import { createEmployeesObject } from "./createEmployeesObject";

export default function createReportObject(employeesList) {
  const reportObject = {
    departmentName: employeesList.departmentName,
    employees: employeesList.employees,
    totalEmployees: employeesList.employees.length,
  };

  return reportObject;
}
