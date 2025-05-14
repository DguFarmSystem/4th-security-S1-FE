import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="btn btn-primary" onClick={() => navigate("/main")}>
          메인
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/mypage")}>
          마이페이지
        </button>
      </div>
    </>
  );
}
