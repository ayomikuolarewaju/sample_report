import React, { useState } from "react";

function Extra() {
  const [choice, setChoice] = useState("");

  return (
    <div className="text-xs border-black border m-1 lg:w-[1000px] w-[500px] lg:flex items-start justify-between mx-auto overflow-hidden p-2 gap-2">
      <div className="mb-2">
        <div className="bg-blue-300 text-center p-3 mb-2 text-xs">
          <h2>EXTRACURRICULAR ACTIVITIES</h2>
        </div>
        <div>
          <form>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-black font-bold flex justify-center items-center text-xs">
                Debate Club
              </label>
              <select
                title="club"
                name="choice"
                className="w-[250px] p-2 text-xs"
                onChange={(e) => setChoice(e.target.value)}
              >
                <option value={choice}>Good</option>
                <option value={choice}>Average</option>
                <option value={choice}>Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-black font-bold flex justify-center items-center text-xs">
                Science Club
              </label>
              <select
                title="club"
                name="debate"
                className="w-[250px] p-2 text-xs"
                onChange={(e) => setChoice(e.target.value)}
              >
                <option value={choice}>Good</option>
                <option value={choice}>Average</option>
                <option value={choice}>Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Computer Club
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Drama Club
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Music Club
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Sport Teams
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Art Club
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Library Society
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Environment Club
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className="bg-blue-300 text-center p-3 mb-2 text-xs">
          <h2>ACADEMIC ACTIVITIES</h2>
        </div>
        <div>
          <form>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Class Participation
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Assignment Completion
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Project Work
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Group Work
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Research Skill
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Presentation Skill
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Problem Solving
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-[200px] bg-blue-300 h-[50px] text-center text-xs text-black font-bold flex justify-center items-center">
                Critical Thinking
              </label>
              <select title="club" name="debate" className="w-[250px] p-2">
                <option value="first">Good</option>
                <option value="second">Average</option>
                <option value="third">Excellent</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Extra;
