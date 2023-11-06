/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";


const CrewInfo = ({data}) => {
  const params = useParams();
  const crew = data.filter((crewmate) => crewmate.id == params.id);

  return (
    <div>
      <h1>Crewmate : {crew[0].name}</h1>
      <h1>Stats :</h1>
      <h3>Color: {crew[0].color}</h3>
      <h3>Speed: {crew[0].speed} mph</h3>

      {crew[0].speed > 100 ? (
        <h4>Wow, this Crewmate is super fast, that will be helpful! 🏃💨</h4>
      ) : (
        <h4>You may want to find another crewmate. This one is kind of slow 😬
        </h4>
      )}
      <Link to={"/edit/" + crew[0].id}>
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
