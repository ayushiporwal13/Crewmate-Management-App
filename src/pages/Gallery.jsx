import { useState, useEffect } from "react";
import BasicCard from '../components/card'
import { supabase } from '../client';
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const Gallery = ({data}) => {
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

    console.log('Gallery data',data)
    const BluePercentage = (data.filter((crewmate) => crewmate.color === 'Blue').length / data.length) * 100;
    const RedPercentage = (data.filter((crewmate) => crewmate.color === 'Red').length / data.length) * 100;
    const GreenPercentage = (data.filter((crewmate) => crewmate.color === 'Green').length / data.length) * 100;
    const PurplePercentage = (data.filter((crewmate) => crewmate.color === 'Purple').length / data.length) * 100;
    const YellowPercentage = (data.filter((crewmate) => crewmate.color === 'Yellow').length / data.length) * 100;
    // const OrangePercentage = (data.filter((crewmate) => crewmate.color === 'Orange').length / data.length) * 100;
    // const RainbowPercentage = (data.filter((crewmate) => crewmate.color === 'Rainbow').length / data.length) * 100;
    // const PinkPercentage = (data.filter((crewmate) => crewmate.color === 'Pink').length / data.length) * 100;

  return (
    <Grid container spacing={2} wrap="wrap" columnGap={10} justifyContent="space-evenly"  id='Projects' style={{marginTop:'5%'}}>
      <Typography variant="h3" component="div" gutterBottom item width='100%'>
            Your Crewmates Gallery
        </Typography>
        <div style={{width:'100%'}}>
        <img src='https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png' alt='crewmates' style={{width:'300px'}}/>
        </div>
        <div className="stats" style={{width:'100%'}}>
        <Typography variant="h6" component="div" gutterBottom item width='100%'>
            Blue Crewmates: {BluePercentage.toFixed(2)}%
        </Typography>
        <Typography variant="h6" component="div" gutterBottom item width='100%'>
            Red Crewmates: {RedPercentage.toFixed(2)}%
        </Typography>
        <Typography variant="h6" component="div" gutterBottom item width='100%'>
            Green Crewmates: {GreenPercentage.toFixed(2)}%
        </Typography>
        <Typography variant="h6" component="div" gutterBottom item width='100%'>
            Purple Crewmates: {PurplePercentage.toFixed(2)}%
        </Typography>
        <Typography variant="h6" component="div" gutterBottom item width='100%'>
          Yellow Crewmates: {YellowPercentage.toFixed(2)}%
        </Typography>
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