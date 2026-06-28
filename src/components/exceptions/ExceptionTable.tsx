import "./ExceptionTable.css";

import type { ExceptionSummary } from "../../types/exception";

import SeverityBadge from "./SeverityBadge";

interface Props{

items:ExceptionSummary[];

onAssign:(item:ExceptionSummary)=>void;

onResolve:(item:ExceptionSummary)=>void;

}

export default function ExceptionTable({

items,

onAssign,

onResolve

}:Props){

return(

<table className="exceptionTable">

<thead>

<tr>

<th>Reference</th>

<th>Severity</th>

<th>Status</th>

<th>Assigned</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{

items.map(item=>(

<tr key={item.id}>

<td>{item.related_reference}</td>

<td>

<SeverityBadge severity={item.severity}/>

</td>

<td>{item.status}</td>

<td>{item.assigned_to??"-"}</td>

<td>

<button

className="actionButton"

onClick={()=>onAssign(item)}

>

Assign

</button>

<button

className="actionButton"

onClick={()=>onResolve(item)}

>

Resolve

</button>

</td>

</tr>

))

}

</tbody>

</table>

);

}
