/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import { supabase } from "../client";

export default function BasicCard(props) {
  // const updateCount = async (event) => {
  //   event.preventDefault();

  //   await supabase
  //     .from("Crewmates")
  //     .update({ betCount: count + 1 })
  //     .eq("id", props.id);

  //   setCount((count) => count + 1);
  // };

  return (
    <Card sx={{ minWidth: 275 }}>
      <Link to={"/crew/" + props.id}>
        <CardContent>
          <Typography variant="h5" component="div" className="name" color="text.primary">
            Name of Crewmate:
            <Typography variant="h5" color="text.secondary">
              {props.name}
            </Typography>
          </Typography>
          <Typography variant="h5" component="div" className="speed" color="text.primary">
            Speed of Crewmate: 
            <Typography variant="h5" color="text.secondary">
            {props.speed} mph
            </Typography>
          </Typography>
          <Typography variant="h5" component="div" className="color" color="text.primary">
            Color of Crewmate: 
            <Typography variant="h5" color="text.secondary">
            {props.color}
            </Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={"/edit/" + props.id}>
            <Button size="large" style={{color:'black'}}>Edit Crewmate</Button>
          </Link>
        </CardActions>
      </Link>
    </Card>
  );
}
