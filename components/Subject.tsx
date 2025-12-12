"use client";
import React, { useEffect, useState } from "react";

type Result = {
  total: number;
  grade: string;
  point: number;
  remark: string;
  action: string;
};

type SubjectType = {
  name: string;
  exam: number;
  ca1: number;
  ca2: number;
  result: Result;
};

function Subject() {
  function calculateResult(exam: number, ca1: number, ca2: number) {
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

  const [exam, setExam] = useState(0);
  const [ca1, setca1] = useState(0);
  const [ca2, setca2] = useState(0);

  const [result, setResult] = useState<Result>(calculateResult(exam, ca1, ca2));

  const [subjects, setSubjects] = useState<SubjectType[]>([]);
  const [newSubjectName, setNewSubjectName] = useState("");

  const addSubject = () => {
    if (!newSubjectName.trim()) return;

    setSubjects((prev) => [
      ...prev,
      {
        name: newSubjectName,
        exam: 0,
        ca1: 0,
        ca2: 0,
        result: calculateResult(0, 0, 0),
      },
    ]);

    setNewSubjectName("");
  };

  useEffect(() => {
    setResult(calculateResult(exam, ca1, ca2));
  }, [exam, ca1, ca2]);

  useEffect(() => {
    setSubjects((prev) =>
      prev.map((subj) => ({
        ...subj,
        result: calculateResult(subj.exam, subj.ca1, subj.ca2),
      }))
    );
  }, [subjects.map((s) => `${s.exam}-${s.ca1}-${s.ca2}`).join(",")]);

  const grandTotal = subjects.reduce((sum, s) => sum + s.result.total, 0);
  const average = subjects.length ? grandTotal / subjects.length : 0;

  return (
    <div className=" border-black border lg:w-[1000px] w-[500px] text-xs flex items-start justify-start mx-auto overflow-hidden">
      <form>
        <div className="lg:flex w-[1000px] flex-col justify-start items-start p-2 gap-2 text-xs">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="border p-4 mb-4 rounded bg-gray-50 flex gap-x-2 text-xs h-[100px]"
            >
              <h2 className="font-bold bg-blue-300 p-5 h-5 justify-center items-center flex capitalize text-xs">
                {subject.name}
              </h2>

              <div className="flex gap-3 flex-wrap w-[300px] text-xs">
                <input
                  type="number"
                  placeholder="Exam 60%"
                  className="border p-5 w-20 h-5 "
                  value={subject.exam}
                  onChange={(e) =>
                    setSubjects((prev) => {
                      const copy = [...prev];
                      copy[index].exam = Number(e.target.value);
                      return copy;
                    })
                  }
                />

                <input
                  type="number"
                  placeholder="1st CA 20%"
                  className="border p-5 w-20 h-5"
                  value={subject.ca1}
                  onChange={(e) =>
                    setSubjects((prev) => {
                      const copy = [...prev];
                      copy[index].ca1 = Number(e.target.value);
                      return copy;
                    })
                  }
                />

                <input
                  type="number"
                  placeholder="2nd CA 20%"
                  className="border p-5 w-20 h-5"
                  value={subject.ca2}
                  onChange={(e) =>
                    setSubjects((prev) => {
                      const copy = [...prev];
                      copy[index].ca2 = Number(e.target.value);
                      return copy;
                    })
                  }
                />
              </div>
              <div className="flex-1 flex gap-3 flex-wrap w-[600px] text-xs">
                <div className="p-x-3 h-[100px] flex lg:flex-col justify-start items-center text-xs">
                  <label className="lg:w-20 w-[150px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                    Total
                  </label>
                  <input
                    name="total"
                    type="text"
                    placeholder="0"
                    value={subject.result.total}
                    className="lg:w-20 w-[150px] p-2 text-center text-xs"
                  />
                </div>

                <div className="p-x-3 h-[100px] flex lg:flex-col justify-start items-center ">
                  <label className="lg:w-20 w-[150px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                    Grade
                  </label>
                  <input
                    type="text"
                    name="grade"
                    value={subject.result.grade}
                    className="lg:w-20 w-[150px] p-2 text-center text-xs"
                    placeholder="0"
                  />
                </div>

                <div className="p-x-3 h-[100px] flex lg:flex-col justify-start items-center ">
                  <label className="lg:w-20 w-[150px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                    Point
                  </label>
                  <input
                    type="text"
                    name="point"
                    value={subject.result.point}
                    className="lg:w-20 w-[150px] p-2 text-center text-xs"
                    placeholder="0"
                  />
                </div>

                <div className="p-x-3 h-[100px] flex lg:flex-col justify-start items-center ">
                  <label className="lg:w-20 w-[150px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                    Remark
                  </label>
                  <input
                    type="text"
                    name="remark"
                    className="lg:w-20 w-[200px] text-center p-2 text-xs"
                    placeholder="0"
                    value={subject.result.remark}
                  />
                </div>

                <div className="p-x-3 h-[100px] flex lg:flex-col justify-start items-center ">
                  <label
                    className="lg:w-20 w-[150px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center"
                    htmlFor="attendance"
                  >
                    Action
                  </label>
                  <input
                    type="text"
                    name="action"
                    className="lg:w-20 w-[200px] p-2 text-center text-xs"
                    placeholder="0"
                    value={subject.result.action}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:flex justify-start items-start mt-2 p-2">
          <div className="w-[400px] h-[50px]">
            <h2 className="text-xs font-bold w-[200px]">Grand Total:</h2>
            <p>{grandTotal}</p>
          </div>
          <div className="w-[500px]">
            <h2 className="text-xs font-bold w-[200px]">Average:</h2>
            <p>{average.toFixed(2)}</p>
          </div>
        </div>
        <div className="mb-4 flex gap-2 p-2">
          <input
            type="text"
            value={newSubjectName}
            onChange={(e) => setNewSubjectName(e.target.value)}
            placeholder="Enter subject name"
            className="border p-2"
          />
          <button
            type="button"
            onClick={addSubject}
            className="bg-blue-400 text-black px-4 py-2 rounded cursor-pointer text-xs"
          >
            Add Subject
          </button>
        </div>
      </form>
    </div>
  );
}

export default Subject;
