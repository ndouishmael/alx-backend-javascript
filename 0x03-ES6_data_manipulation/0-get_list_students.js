/**
 * Retrieves a list of students.
 * @author Ishmael Ndou <https://github.com/ndouishmael>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export function getListStudents() {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  
  console.log(students);
  
  return students;
}
