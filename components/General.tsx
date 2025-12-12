import React from "react";

function General() {
  return (
    <div className=" border-black border lg:w-[1000px] w-[500px] flex items-start justify-between mx-auto overflow-hidden text-xs">
      <div>
        <div className="bg-blue-300 text-center p-3 mb-2 text-xs">
          <h2>GENERAL NOTE</h2>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-y-3">
            <label>Next Term begins on ...., 2025</label>
            <input
              className="p-1"
              placeholder="School fees for 1st Term: ₦ (Term-ly) 45,000"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label>Next Term begins on ...., 2025</label>
            <input
              className="p-1"
              placeholder="School fees for 1st Term: ₦ (Term-ly) 45,000"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-blue-300 text-center p-3 mb-2 text-xs">
          <h2>CLASS TEACHER'S COMMENTS</h2>
        </div>
        <div className="flex flex-col gap-y-3">
          <textarea
            className="p-3 text-xs lowercase"
            placeholder="Enter CLASS TEACHER'S COMMENTS"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <label>Next Term begins on ...., 2025</label>
          <input
            className="p-1"
            placeholder="School fees for 1st Term: ₦ (Term-ly) 45,000"
          />
        </div>
      </div>
    </div>
  );
}

export default General;
