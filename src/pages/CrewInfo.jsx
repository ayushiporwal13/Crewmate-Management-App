/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CrewInfo = ({data}) => {
  console.log('data', data[0]);
  return (
    <div>
      <h1>Crewmate : {data[0].name}</h1>
      <h1>Stats :</h1>
      <h3>Color: {data[0].color}</h3>
      <h3>Speed: {data[0].speed} mph</h3>

      {data[0].speed > 100 ? (
        <h4>Wow, this Crewmate is super fast, that will be helpful! 🏃💨</h4>
      ) : (
        <h4>You may want to find another crewmate.</h4>
      )}
      <Link to={"/edit/" + data[0].id}>
        <button>Wanna edit this Crewmate?</button>
      </Link>
      <img
        src="https://shimmering-stardust-c75334.netlify.app/assets/suspect.bdfacc7e.png"
        alt="spaceship"
        style={{ width: "300px" }}
        />
    </div>
  );
};

export default CrewInfo;
