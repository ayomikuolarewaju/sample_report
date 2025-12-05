import { prisma } from "./prisma";

export async function createStudent(data: {
  name: string;
  admissionNo: string;
  className: string;
  term: string;
  session?: string;
  attendance?: number;
}) {
  return prisma.student.create({
    data: {
      name: data.name,
      admissionNo: data.admissionNo,
      class: data.className,
      term: data.term,
      session: data.session || "2023/2024",
      attendance: data.attendance ?? 0,
    },
  });
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
