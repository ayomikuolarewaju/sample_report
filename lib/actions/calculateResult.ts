export function calculateResult(exam: number, ca1: number, ca2: number) {
  const total = exam + ca1 + ca2;
  let grade: string, point: number, remark: string, action: string;

  if (total >= 75) {
    grade = "A";
    point = 5;
    remark = "Excellent";
    action = "Promoted";
  } else if (total >= 65) {
    grade = "B";
    point = 4;
    remark = "Very Good";
    action = "Promoted";
  } else if (total >= 50) {
    grade = "C";
    point = 3;
    remark = "Good";
    action = "Promoted";
  } else if (total >= 45) {
    grade = "D";
    point = 2;
    remark = "Pass";
    action = "Promoted";
  } else {
    grade = "F";
    point = 0;
    remark = "Fail";
    action = "Repeat";
  }

  return { total, grade, point, remark, action };
}
