import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import Detail from "../components/detail";
import RadioButton from "../components/radiobutton";

const EditCrew = ({data}) => {
  const { id } = useParams();
  const [crewDetails, setCrewDetails] = useState({});

  async function deleteCrew(event) {
    event.preventDefault();

    await supabase.from("Crewmates").delete().eq("id", id);

    window.location = "/";
  }

  useEffect(() => {
    async function fetchPost() {
      const { data } = await supabase
        .from("Crewmates")
        .select()
        .eq("id", id)
        .single();

      // set state of posts
      setCrewDetails(data);
    }

    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCrewDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateCrew = async (event) => {
    event.preventDefault();

    await supabase
      .from("Crewmates")
      .update({
        name: crewDetails.name,
        speed: crewDetails.speed,
        color: crewDetails.color,
      })
      .eq("id", id);

    window.location = "/";
  };

  return (
    <div>
      <h1>Update Your Crewmate!</h1>
      <img
        src="https://shimmering-stardust-c75334.netlify.app/assets/spaceship.3d8f767c.png"
        alt="spaceship"
        style={{ width: "300px" }}
      />
      <h3>Current Crewmate Info:</h3>
      <h4>
        Name: {data[0].name} , Speed: {data[0].speed}, Color:{" "}
        {data[0].color} , Category: {data[0].category}
      </h4>
      <form onSubmit={updateCrew}>
        <Detail title='Name:' type='text' placeholder="Enter crewmate's name" handleChange={handleChange} name='name' />
        <Detail title='Speed(mph):' type='text' placeholder="Enter speed in mph" handleChange={handleChange} name='speed'/> {/* fix handleChange to handleChange */}
        <RadioButton handleChange={handleChange} value={crewDetails.color} />

        <button type="submit" value="Submit" style={{border:'1px solid black', margin:'0 2%'}}>
          Submit
        </button>
        <button className="deleteButton" onClick={deleteCrew} style={{border:'1px solid black', margin:'0 2%'}}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditCrew;
