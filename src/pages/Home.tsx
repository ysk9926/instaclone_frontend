import { logUserOut } from "../apollo";

function Home() {
  return (
    <div>
      <h4>Home</h4>
      <button
        onClick={() => {
          logUserOut();
        }}
      >
        로그아웃
      </button>
    </div>
  );
}

export default Home;
