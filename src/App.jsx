import { useRoutes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./pages/Gallery";
import CreateCrew from "./pages/CreateCrew";
import EditCrew from "./pages/EditCrew";
import CrewInfo from "./pages/CrewInfo";
import Home from "./pages/Home";
import { supabase } from "./client";

const App = () => {
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


  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create",
      element: <CreateCrew />,
    },
    {
      path: "/edit/:id",
      element: <EditCrew data={crewmates}/>,
    },
    {
      path: "/crew/:id",
      element: <CrewInfo data={crewmates}/>,
    },
    {
      path: "/gallery",
      element: <Gallery data={crewmates}/>,
    },
  ]);

  return (
    <div className="App">
      <div className="App-header">
      <Link to="/" style={{padding:'2%', margin:'2%', border:'1px solid black'}}> Home </Link>
      <Link to="/create" style={{padding:'2%', margin:'2%', border:'1px solid black'}}> Create a Crewmate </Link>
      <Link to="/gallery" style={{padding:'2%', margin:'2%', border:'1px solid black'}}> Crewmate Gallery </Link>
      </div>
      <div className="App-content">
        {element}
      </div>
     
    </div>
  );
}

export default App;
