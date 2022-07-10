import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function NewDay() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  function addDay(e: React.FormEvent) {
    e.preventDefault();
    fetch(`http://localhost:3001/days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        Swal.fire("생성이 완료 되었습니다.");
        navigate("/");
      }
    });
  }

  return (
    <div>
      <h3>현재 일수 : {days.length}</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
