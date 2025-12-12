function Student() {
  return (
    <div className=" border-black border lg:w-[1000px] w-[600px] lg:h-[200px] flex items-center justify-start mx-auto text-xs">
      <form>
        <div className="p-x-3 h-[50px] flex justify-start items-center text-xs">
          <label
            htmlFor="studentName"
            className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center"
          >
            Student Name:
          </label>
          <input
            type="text"
            name="name"
            className="lg:w-[500px] p-2"
            placeholder="Enter student name"
          />
        </div>
        <div className="lg:flex">
          <div className="flex">
            <label
              className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center"
              htmlFor="admissionNo"
            >
              Admission No:
            </label>
            <input
              type="text"
              name="admissionNo"
              className="w-[250px] p-2"
              placeholder="Enter admission number"
            />
          </div>
          <div className="flex">
            <label
              className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center"
              htmlFor="class"
            >
              Class:
            </label>
            <select
              name="class"
              id="class"
              className="w-[250px] p-2 text-xs uppercase font-bold"
            >
              <option value="kg1">KG1</option>
              <option value="kg2">nursery 1</option>
              <option value="Nursery 1">nursery 2</option>
              <option value="Nursery 2">kindergarten</option>
              <option value="Pry 1">pry 1</option>
              <option value="Pry 2">pry 2</option>
              <option value="Pry 3">pry 3</option>
              <option value="Pry 4">pry 4</option>
              <option value="Pry 5">pry 5</option>
              <option value="Pry 6">pry 6</option>
              <option value="jss 1">jss 1</option>
              <option value="jss 2">jss 2</option>
              <option value="jss 3">jss 3</option>
              <option value="sss 1">sss 1</option>
              <option value="sss 2">sss 2</option>
              <option value="sss 3">sss 3</option>
            </select>
          </div>
        </div>
        <div className="lg:flex">
          <div className="flex">
            <label
              className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center"
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
              className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center"
              htmlFor="session"
            >
              Session:
            </label>
            <select name="session" id="session" className="w-[250px] p-2">
              <option value="2024/2025">2024/2025</option>
              <option value="2025/2026">2025/2026</option>
              <option value="2025/2027">2026/2027</option>
            </select>
          </div>
        </div>
        <div className="p-x-3 h-[50px] flex justify-start items-center">
          <label
            className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center"
            htmlFor="attendance"
          >
            Attendance:
          </label>
          <input
            type="text"
            name="attendance"
            className="lg:w-[500px] p-2"
            placeholder="Enter attendance"
          />
        </div>
      </form>
    </div>
  );
}

export default Student;
