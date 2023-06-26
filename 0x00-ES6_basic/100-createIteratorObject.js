import { createReportObject } from "./createReportObject";

export default function createIteratorObject(report) {
  let currentDepartment = "";
  let currentEmployeeIndex = 0;

  function next() {
    const value = {
      department: currentDepartment,
      employee: report.allEmployees[currentEmployeeIndex],
    };

    if (currentEmployeeIndex === report.allEmployees.length - 1) {
      currentDepartment = Object.keys(report.allEmployees)[currentEmployeeIndex + 1];
      currentEmployeeIndex = 0;
    } else {
      currentEmployeeIndex++;
    }

    return value;
  }

  function done() {
    return true;
  }

  return {
    next,
    done,
  };
}
