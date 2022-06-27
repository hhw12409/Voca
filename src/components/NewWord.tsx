import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IDay } from "./DayList";

export default function NewWord() {

  const days: IDay[]  = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoding, setIsLoding] = useState(false);

  function onSubmit(e: React.FormEvent){

    const day = useRef<HTMLSelectElement>(null);
    const eng = useRef<HTMLInputElement>(null);
    const kor = useRef<HTMLInputElement>(null);

    e.preventDefault();
    if(!isLoding && dayRef.current && engRef.current && korRef.current) {
    setIsLoding(true)
    fetch(`http://localhost:3001/words`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        day,
        eng,
        kor,
        isDone: false
      }),
    })
      .then(res => {
        if(res.ok) {
          alert("생성이 완료 되었습니다.")
          navigate(`/day/${day}`)
          setIsLoding(false)
        }
      });
    }
  }

  const dayRef = useRef<HTMLSelectElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const engRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="Write your word.." ref={engRef}></input>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="단어를 작성해주세요.." ref={korRef}></input>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {
            days.map(day => (
              <option value={day.day} key={day.id}>{day.day}</option>
            ))
          }
        </select>
      </div>
      <button style={{opacity : isLoding ? 0.3 : 1}}>{isLoding ? "Saving..." : "저장"}</button>
    </form>
  )
}