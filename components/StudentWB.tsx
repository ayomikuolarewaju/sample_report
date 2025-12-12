function StudentWB() {
  return (
    <div className=" border-black border lg:w-[1000px] w-[500px] lg:h-[250px] flex flex-col items-start justify-start gap-y-2 ">
      <div className=" h-[50px] flex justify-start items-start lg:w-[600px] w-[500px] pt-1">
        <h3 className="w-[200px] bg-blue-300 h-[50px] text-center text-sm text-black font-bold flex justify-center items-center">
          Student Name:
        </h3>
        <p className="w-[200px] p-2"></p>
      </div>
      <div className="lg:flex gap-y-2">
        <div className="flex pb-2">
          <h3 className="w-[200px] bg-blue-300 h-[50px] text-center text-sm text-black font-bold flex justify-center items-center">
            Admission No:
          </h3>
          <p className="w-[250px] p-2"></p>
        </div>
        <div className="flex">
          <h3 className="w-[200px] bg-blue-300 h-[50px] text-center text-sm text-black font-bold flex justify-center items-center">
            Class:
          </h3>
          <p className="w-[250px] p-2"></p>
        </div>
      </div>
      <div className="lg:flex">
        <div className="flex pb-2">
          <h3 className="w-[200px] bg-blue-300 h-[50px] text-center text-sm text-black font-bold flex justify-center items-center">
            Term:
          </h3>
          <p className="w-[250px] p-2"></p>
        </div>
        <div className="flex">
          <h3 className="w-[200px] bg-blue-300 h-[50px] text-center text-sm text-black font-bold flex justify-center items-center">
            Session:
          </h3>
          <p className="w-[250px] p-2"></p>
        </div>
      </div>
      <div className=" h-[50px] flex justify-start items-center lg:w-[600px] w-[500px] pb-1">
        <h3 className="w-[200px] bg-blue-300 h-[50px] text-center text-sm text-black font-bold flex justify-center items-center">
          Attendance:
        </h3>
        <p className="lg:w-[200px] p-2"></p>
      </div>
    </div>
  );
}

export default StudentWB;
