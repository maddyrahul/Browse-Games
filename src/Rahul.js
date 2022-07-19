import './App.css';
import database from './db.json';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

export const Rahul =() =>{
const [term,setTerm] = useState("");
const gamedata=database.filter((game) =>{ 
if(term == "") {
return game;
} else if(game.title!==null&&game.title!==undefined&&game.title.toLowerCase().includes(term.toLowerCase())){
return game;
}
}).map((game) =>{
return(
<tr>
<td>{game.title}</td>
<td>{game.platform}</td>
<td>{game.genre}</td>
<td>{game.platform}</td>
<td>{game.editors_choice}</td>
</tr>
)})
return (
<div>
<div>
<input type="text" placeholder="Search" onChange={(event)=>{
setTerm(event.target.value);
}}/>
</div>

<div style={{display:'flex', flexDirection:'column', borderTop:'20px solid white', width:'150vh', paddingLeft:'28vh'}}>
<Table striped bordered hover>
<thead>
<tr>
<th>Title</th>
<th>Platform</th>
<th>Genre</th>
<th>Platform</th>
<th>Editors Choice</th>
</tr>
</thead>
<tbody>


{gamedata}

</tbody>
</Table>
</div>
</div>
);
}
