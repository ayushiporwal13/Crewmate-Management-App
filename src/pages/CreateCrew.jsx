import { useState } from 'react';
import Detail from '../components/detail';
import RadioButton from '../components/radiobutton';
import { supabase } from '../client';


const CreateCrew = () => {

  const [crewDetails, setCrewDetails] = useState({name:'',speed:'',color:''});

  const handleChange = (event) => {
    console.log('event.target',event.target);
    const {name,value} = event.target;
    console.log('name',name);
    console.log('value',value);
    setCrewDetails( (prev) => {
      return{
        ...prev,
        [name]:value,
      }
    })

    console.log('crewDetails',crewDetails);
  }

  const createCrew = async (event) => {
    event.preventDefault();

    var createdcrew = {name:crewDetails.name,speed:crewDetails.speed,color:crewDetails.color};

    const { error } = await supabase
    .from('Crewmates')
    .insert(createdcrew)
    .select()

    if(error){
      console.log(error);
    }

    window.location = '/';
  }

  return (
    <div>
        <h1>Create a New Crewmate</h1>
        <img src='https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png' alt='crewmates' style={{width:'300px'}}/>
        <Detail title='Name:' type='text' placeholder="Enter crewmate's name" handleChange={handleChange} name='name' />
        <Detail title='Speed(mph):' type='text' placeholder="Enter speed in mph" handleChange={handleChange} name='speed'/>
        <RadioButton handleChange={handleChange} value={crewDetails.color} />
        <button type='submit' onClick={createCrew} style={{border:'1px solid black'}}>Create Crewmate</button>
    </div>
  )
}

export default CreateCrew


