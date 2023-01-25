/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
  return grades.length;
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
  return grades.reduce((total, current) => (total += current));
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
  return getSumGrades(grades) / getNumberOfGrades(grades);
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
  return grades.filter((grade) => grade >= 10);
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
  return grades.filter((grade) => grade <= 9);
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
  return grades.map((grade) => {
    return grade + 1 > 20 ? 20 : ++grade;
  });
}
