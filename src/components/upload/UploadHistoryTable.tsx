import "./UploadHistoryTable.css";

import type{

PaymentFile,

FileStatus

}from"../../types/file";

import SearchBox from "../common/SearchBox/SearchBox";

import StatusBadge from "./StatusBadge";

interface Props{

files:PaymentFile[];

search:string;

status:"ALL"|FileStatus;

onSearch:(value:string)=>void;

onStatusChange:(status:"ALL"|FileStatus)=>void;

}

export default function UploadHistoryTable({

files,

search,

status,

onSearch,

onStatusChange

}:Props){

return(

<>

<div className="historyToolbar">

<SearchBox

value={search}

placeholder="Search payment files..."

onChange={onSearch}

/>

<select

value={status}

onChange={e=>

onStatusChange(

e.target.value as "ALL"|FileStatus

)

}

>

<option value="ALL">

All Status

</option>

<option value="UPLOADED">

Uploaded

</option>

<option value="PROCESSING">

Processing

</option>

<option value="PROCESSED">

Processed

</option>

<option value="FAILED">

Failed

</option>

</select>

</div>

<table className="historyTable">

<thead>

<tr>

<th>

Filename

</th>

<th>

Bank

</th>

<th>

Status

</th>

<th>

Uploaded

</th>

</tr>

</thead>

<tbody>

{

files.length?

files.map(file=>(

<tr key={file.id}>

<td>

{file.filename}

</td>

<td>

{file.bank_id}

</td>

<td>

<StatusBadge

status={file.status}

/>

</td>

<td>

{

new Date(

file.uploaded_at

)

.toLocaleString()

}

</td>

</tr>

))

:

<tr>

<td colSpan={4}>

No files found.

</td>

</tr>

}

</tbody>

</table>

</>

);

}
