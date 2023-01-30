import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card.css"

function OutlinedCard({jobs}) {
  const candidate=localStorage.getItem('id');
  const[postId,setPostId]=useState("");
  const[jobDesc,setjobdesc]=useState("");
  const[reqSkill,setreqSkill]=useState("");
  const[title,settitle]=useState("");
  
    const handle=(e)=>{
         setPostId(jobs._id);
         setjobdesc(jobs.jobDesc)
         setreqSkill(jobs.reqSkill)
         settitle(jobs.title);
        
     }
     const user={postId,candidate,jobDesc,reqSkill,title};

     const handelChange=(e)=>{
      console.log(user);
      e.preventDefault();
      // fetch("http://localhost:8000/api/student/id",{
      //     method:"PUT",
      //     body:JSON.stringify(user),
      //     mode:'cors',
      //     headers:{
      //       'Content-type':'application/json'
      //     }
      //   })
        // .then((data)=>{
        //   console.log(data) 
        // })
        // .catch((err)=>{
        //   console.log(err)
        // })
     }
  return (
    
    <Card style={{ width: '18rem' }}  className="container-card">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{jobs.title}</Card.Title>
        <Card.Text>
          {jobs.jobDesc}
        </Card.Text>
        <Card.Text>
          {jobs.reqSkill}
        </Card.Text>
        <Card.Text>Expt.{jobs.salary}
        </Card.Text>
        <Button variant="primary" onClick={handle} onChange={handelChange} id={jobs.id}>Go somewhere</Button>
      </Card.Body>
    </Card>
 
  );
}

export default OutlinedCard;