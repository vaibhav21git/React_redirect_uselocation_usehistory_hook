import React from "react";
import { useParams , useLocation , useHistory} from "react-router-dom";


// const User = ({match}) =>
// {
//    return <h1> user {match.params.fname} page</h1>
// };



const User = () =>
{
     const {fname , lname} = useParams();
     const location  = useLocation();
     const  history  = useHistory();
     return(
     <>
      <h1> user {fname}  {lname} page</h1>
      <p>My current loaction is {location.pathname} </p>
      {location.pathname === `/User/vaibhav/sachdeva`?(<button onClick = {()=> history.push('/')}>
           Click Me!! 
      </button>):null} 
      </>
     );
};

export default User; 



// () => history.goBack()
// important application of use history 