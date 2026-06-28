import "./ReportTable.css";

import type{

ReportSummary

}from"../../types/report";

interface Props{

items:ReportSummary[];

}

export default function ReportTable({

items

}:Props){

return(

<table className="reportTable">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th>Status</th>

<th>Generated</th>

<th>Download</th>

</tr>

</thead>

<tbody>

{

items.map(report=>(

<tr key={report.id}>

<td>{report.name}</td>

<td>{report.report_type}</td>

<td>{report.status}</td>

<td>{report.generated_at}</td>

<td>

{

report.download_url?

<a

href={report.download_url}

target="_blank"

rel="noreferrer"

>

Download

</a>

:

"-"

}

</td>

</tr>

))

}

</tbody>

</table>

);

}
