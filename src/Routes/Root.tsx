import { Link, useNavigate } from "react-router-dom";

function Root() {
  const navigate = useNavigate();
  const isLoggedIn = true;
  const onsubmit = () => {
    isLoggedIn ? navigate("/Home") : navigate("/Login");
  };

  return (
    <>
      <div onSubmit={onsubmit}>root</div>
    </>
  );
}

export default Root;
