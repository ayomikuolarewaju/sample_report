function Student() {
  return (
    <div className=" border-black border w-[1000px] h-[200px] flex items-center justify-start mx-auto">
      <form action="">
        <div className="p-x-3 h-[50px] flex justify-start items-center ">
          <label
            htmlFor="studentName"
            className="w-[200px] bg-blue-300 h-[50px] text-center text-sm text-black font-bold flex justify-center items-center"
          >
            Student Name:
          </label>
          <input
            type="text"
            name="student"
            className="w-[500px] p-2"
            placeholder="Enter student name"
          />
        </div>
        <div className="flex">
          <div className="flex">
            <label
              className="w-[200px] bg-blue-300 h-[50px] text-center text-sm text-black font-bold flex justify-center items-center"
              htmlFor="admissionNo"
            >
              Admission No:
            </label>
            <input
              type="text"
              name="admission"
              className="w-[250px] p-2"
              placeholder="Enter admission number"
            />
          </div>
          <div className="flex">
            <label
              className="w-[200px] bg-blue-300 h-[50px] text-center text-sm text-black font-bold flex justify-center items-center"
              htmlFor="class"
            >
              Class:
            </label>
            <select name="class" id="class" className="w-[250px] p-2">
              <option value="kg1">KG1</option>
              <option value="kg2">KG2</option>
              <option value="kg3">KG3</option>
            </select>
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <label
              className="w-[200px] bg-blue-300 h-[50px] text-center text-sm text-black font-bold flex justify-center items-center"
              htmlFor="term"
            >
              Term:
            </label>
            <select name="term" id="term" className="w-[250px] p-2">
              <option value="first">First Term</option>
              <option value="second">Second Term</option>
              <option value="third">Third Term</option>
            </select>
          </div>
          <div className="flex">
            <label
              className="w-[200px] bg-blue-300 h-[50px] text-center text-sm text-black font-bold flex justify-center items-center"
              htmlFor="session"
            >
              Session:
            </label>
            <select name="session" id="session" className="w-[250px] p-2">
              <option value="2022/2023">2022/2023</option>
              <option value="2023/2024">2023/2024</option>
              <option value="2024/2025">2024/2025</option>
            </select>
          </div>
        </div>
        <div className="p-x-3 h-[50px] flex justify-start items-center">
          <label
            className="w-[200px] bg-blue-300 h-[50px] text-center text-sm text-black font-bold flex justify-center items-center"
            htmlFor="attendance"
          >
            Attendance:
          </label>
          <input
            type="text"
            name="attendance"
            className="w-[500px] p-2"
            placeholder="Enter attendance"
          />
        </div>
      </form>
    </div>
  );
}

export default Student;
