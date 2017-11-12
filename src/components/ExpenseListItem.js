import React from 'react';
import { Link } from 'react-router-dom';



const ExpenseListItem = ({  id, description, amount, createdAt }) => (
    <div>
       <Link to={`/edit/${id}`}> 
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
   
    </div>
);



export default ExpenseListItem;

//import the correct action generator for, the actions expenses  file
//connect the button component to access dispatch
//wire up onclick to get it working
//i have access to id which we need to remove it
//also we will use export default connect()(ExpenseListItem) this is a dispatxh