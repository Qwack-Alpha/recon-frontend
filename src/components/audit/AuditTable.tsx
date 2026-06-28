import "./AuditTable.css";

import type{

AuditLog

}from"../../types/audit";

interface Props{

items:AuditLog[];

}

export default function AuditTable({

items

}:Props){

return(

<table className="auditTable">

<thead>

<tr>

<th>Action</th>

<th>Entity</th>

<th>User</th>

<th>Date</th>

</tr>

</thead>

<tbody>

{

items.map(log=>(

<tr key={log.id}>

<td>{log.action}</td>

<td>{log.entity}</td>

<td>{log.performed_by}</td>

<td>{log.performed_at}</td>

</tr>

))

}

</tbody>

</table>

);

}
