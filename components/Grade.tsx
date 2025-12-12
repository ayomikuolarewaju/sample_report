import React from "react";

function Grade() {
  return (
    <div className=" border-black border lg:w-[1000px] w-[500px] lg:flex items-start justify-between mx-auto overflow-hidden text-xs p-2">
      <div>
        <div className="bg-blue-300 text-center p-3 mb-2 text-xs">
          <h2>GRADING SCALE</h2>
        </div>
        <div>
          <table className="flex flex-col gap-x-5 p-3 justify-center items-center">
            <div className="flex gap-x-5 p-3 justify-center items-center">
              <th>Grade</th>
              <th>Min %</th>
              <th>Max %</th>
            </div>
            <div>
              <tr className="flex gap-x-5 p-3 justify-center items-center">
                <td>A</td>
                <td>80%</td>
                <td>100%</td>
              </tr>
            </div>
            <div>
              <tr className="flex gap-x-5 p-3 justify-center items-center">
                <td>B</td>
                <td>70%</td>
                <td>79%</td>
              </tr>
            </div>
            <div>
              <tr className="flex gap-x-5 p-3 justify-center items-center">
                <td>C</td>
                <td>60%</td>
                <td>69%</td>
              </tr>
            </div>
            <div>
              <tr className="flex gap-x-5 p-3 justify-center items-center">
                <td>D</td>
                <td>50%</td>
                <td>59%</td>
              </tr>
            </div>
            <div>
              <tr className="flex gap-x-5 p-3 justify-center items-center">
                <td>F</td>
                <td>0%</td>
                <td>49%</td>
              </tr>
            </div>
          </table>
        </div>
      </div>
      <div>
        <div className="bg-blue-300 text-center p-3 mb-2 text-xs">
          <h2>PRINCIPAL'S COMMENTS</h2>
        </div>
        <div>
          <div className="flex flex-col gap-y-3">
            <textarea
              className="p-3 text-xs lowercase"
              placeholder="Enter PRINCIPAL'S COMMENTS"
            />
            <div className="flex  gap-x-3">
              <label>Principal Name</label>
              <input className="p-1" placeholder="Enter Principal's Name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grade;
