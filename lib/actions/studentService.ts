"use server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export type FormState = {
  error: SubErrors;
};
export type SubErrors = {
  name?: string;
  admissionNo?: string;
  classNo?: string;
  term?: string;
  session?: string;
  attendance?: string;
};

export async function createStudent(prevState: FormState, formdata: FormData) {
  const name = formdata.get("name") as string;
  const admissionNo = formdata.get("admissionNo") as string;
  const term = formdata.get("term") as string;
  const classNo = formdata.get("class") as string;
  const session = formdata.get("session") as string;
  const attendance = formdata.get("attendance") as string;

  console.log(name, admissionNo, classNo, term, session, attendance);

  const error: SubErrors = {};

  if (!name) {
    error.name = "name is required";
  }
  if (!admissionNo) {
    error.admissionNo = "admissionNo is required";
  }
  if (!classNo) {
    error.classNo = "class is required";
  }
  if (!term) {
    error.term = "term is required";
  }
  if (!session) {
    error.session = "session is required";
  }
  if (!attendance) {
    error.attendance = "attendance is required";
  }

  if (Object.keys(error).length > 0) {
    return { error };
  }

  const createData = await prisma.student.create({
    data: {
      name,
      admissionNo,
      class: classNo,
      term,
      session,
      attendance: Number(attendance),
    },
  });

  if (!createData) {
    console.log("error", createData);
  }
  return redirect(`/students/${admissionNo}`);
}

export async function getAllStudents() {
  return prisma.student.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getStudent(id: string) {
  return prisma.student.findUnique({
    where: { id },
    include: { subjects: true },
  });
}

export async function updateStudent(
  id: string,
  data: {
    name?: string;
    admissionNo?: string;
    className?: string;
    term?: string;
    session?: string;
    attendance?: number;
  }
) {
  return prisma.student.update({
    where: { id },
    data: {
      name: data.name,
      admissionNo: data.admissionNo,
      class: data.className,
      term: data.term,
      session: data.session,
      attendance: data.attendance,
    },
  });
}

export async function deleteStudent(id: string) {
  return prisma.student.delete({ where: { id } });
}
