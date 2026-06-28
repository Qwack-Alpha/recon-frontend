import "./CaseDetailsDrawer.css";

import type{

InvestigationCaseResponse

}from"../../types/case";

interface Props{

detail:InvestigationCaseResponse|null;

onClose:()=>void;

}

export default function CaseDetailsDrawer({

detail,

onClose

}:Props){

if(!detail){

return null;

}

return(

<div className="drawerOverlay">

<div className="drawer">

<div className="drawerHeader">

<h2>

{detail.overview.case_number}

</h2>

<button onClick={onClose}>

?

</button>

</div>

<h3>AI Explanation</h3>

<p>

{detail.ai_explanation??"No explanation available."}

</p>

<h3>AI Recommendation</h3>

<p>

{detail.ai_recommendation??"No recommendation available."}

</p>

<h3>Description</h3>

<p>

{detail.overview.description??"-"}

</p>

</div>

</div>

);

}
