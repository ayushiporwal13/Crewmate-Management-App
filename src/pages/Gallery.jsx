import { useState, useEffect } from "react";
import BasicCard from '../components/card'
import { supabase } from '../client';
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const Gallery = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    async function fetchCrew() {
      const { data } = await supabase
        .from("Crewmates")
        .select()
        .order("created_at", { ascending: true });

      // set state of posts
      setCrewmates(data);

      if(data){
        console.log(data);
      }
    }
    fetchCrew();
  }, []);

  return (
    <Grid container spacing={2} wrap="wrap" columnGap={10} justifyContent="space-evenly"  id='Projects' style={{marginTop:'5%'}}>
      <Typography variant="h3" component="div" gutterBottom item width='100%'>
            Your Crewmates Gallery
        </Typography>
        <div style={{width:'100%'}}>
        <img src='https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png' alt='crewmates' style={{width:'300px'}}/>
        </div>
        
        {crewmates && crewmates.length > 0 
        ? (
        crewmates.map((crewmate, index) => (
          <BasicCard
            id={crewmate.id}
            name={crewmate.name}
            speed={crewmate.speed}
            color={crewmate.color}
            key={index}
          />
        ))
      ) : (
        <h2>{"No CrewMates Yet 😞"}</h2>
      )}
    </Grid>
  )
}

export default Gallery