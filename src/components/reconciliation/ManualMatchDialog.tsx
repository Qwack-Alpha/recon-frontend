import "./ManualMatchDialog.css";

import {useState} from "react";

import type{

ReconciliationItem

}from"../../types/reconciliation";

interface Props{

item:ReconciliationItem|null;

loading:boolean;

onClose:()=>void;

onSubmit:(bankTransactionId:string)=>void;

}

export default function ManualMatchDialog({

item,

loading,

onClose,

onSubmit

}:Props){

const[

bankTransactionId,

setBankTransactionId

]=useState("");

if(!item){

return null;

}

return(

<div className="dialogOverlay">

<div className="dialog">

<h2>Manual Match</h2>

<p>

Payment Reference

</p>

<b>

{item.payment_reference}

</b>

<input

placeholder="Bank Transaction Id"

value={bankTransactionId}

onChange={e=>setBankTransactionId(e.target.value)}

/>

<div className="dialogActions">

<button onClick={onClose}>

Cancel

</button>

<button

disabled={loading}

onClick={()=>onSubmit(bankTransactionId)}

>

Match

</button>

</div>

</div>

</div>

);

}
