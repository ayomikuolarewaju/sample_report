import { prisma } from "./prisma";
import { calculateResult } from "./calculateResult";

export async function createSubject(data: {
  studentId: string;
  subjectName: string;
  examScore: number;
  firstCA: number;
  secondCA: number;
}) {
  const result = calculateResult(data.examScore, data.firstCA, data.secondCA);

  return prisma.subjectResult.create({
    data: {
      ...data,
      ...result,
    },
  });
}

export async function getSubjectsByStudent(studentId: string) {
  return prisma.subjectResult.findMany({
    where: { studentId },
    orderBy: { createdAt: "desc" },
  });
}

export async function updateSubject(
  id: string,
  data: {
    subjectName?: string;
    examScore?: number;
    firstCA?: number;
    secondCA?: number;
  }
) {
  const old = await prisma.subjectResult.findUnique({ where: { id } });
  if (!old) throw new Error("Subject not found");

  const exam = data.examScore ?? old.examScore;
  const ca1 = data.firstCA ?? old.firstCA;
  const ca2 = data.secondCA ?? old.secondCA;

  const result = calculateResult(exam, ca1, ca2);

  return prisma.subjectResult.update({
    where: { id },
    data: {
      subjectName: data.subjectName ?? old.subjectName,
      examScore: exam,
      firstCA: ca1,
      secondCA: ca2,
      ...result,
    },
  });
}

export async function deleteSubject(id: string) {
  return prisma.subjectResult.delete({ where: { id } });
}

export async function getStudentSummary(studentId: string) {
  const subjects = await prisma.subjectResult.findMany({
    where: { studentId },
  });

  const grandTotal = subjects.reduce((sum:number, s:number) => sum + s.total, 0);
  const average = subjects.length ? grandTotal / subjects.length : 0;

  return { grandTotal, average, count: subjects.length };
}
