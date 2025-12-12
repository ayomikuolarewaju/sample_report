"use server";
import { prisma } from "@/lib/prisma";
import { calculateResult } from "./calculateResult";

export type FormState = {
  error: SubErrors;
};

export interface SubErrors {
  studentId: string;
  subjectName: string;
  examScore: number;
  firstCA: number;
  secondCA: number;
}

export async function createSubject(prevState: FormState, formdata: FormData) {
  const studentId = formdata.get("studentId") as string;
  const subjectName = formdata.get("subjectName") as string;
  const examScore = formdata.get("examScore") as string;
  const firstCA = formdata.get("firstCA") as string;
  const secondCA = formdata.get("secondCA") as string;

  const error: SubErrors = {};

  if (!studentId) {
    error.studentId = "studentId is required";
  }
  if (!subjectName) {
    error.subjectName = "subjectName is required";
  }
  if (!examScore) {
    error.examScore = "examScore is required";
  }
  if (!firstCA) {
    error.firstCA = "firstCA is required";
  }
  if (!secondCA) {
    error.secondCA = "secondCA is required";
  }

  if (Object.keys(error).length > 0) {
    return { error };
  }

  const result = calculateResult(
    Number(examScore),
    Number(firstCA),
    Number(secondCA)
  );

  return prisma.subjectResult.create({
    data: {
      subjectName: subjectName,
      examScore: Number(examScore),
      firstCA: Number(firstCA),
      secondCA: Number(secondCA),
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

// export async function getStudentSummary(studentId: string) {
//   const subjects = await prisma.subjectResult.findMany({
//     where: { studentId },
//   });

//   const grandTotal = subjects.reduce(
//     (sum: number, s: number) => sum + s.total,
//     0
//   );
//   const average = subjects.length ? grandTotal / subjects.length : 0;

//   return { grandTotal, average, count: subjects.length };
// }
