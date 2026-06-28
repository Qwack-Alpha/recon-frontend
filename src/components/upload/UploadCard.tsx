import "./UploadCard.css";

import{

useState

}from"react";

import{

Card

}from"../common";

import UploadZone from "./UploadZone";

interface Props{

loading:boolean;

onUpload:(

bankId:string,

file:File

)=>void;

}

export default function UploadCard({

loading,

onUpload

}:Props){

const[

bankId,

setBankId

]=useState("");

const[

file,

setFile

]=useState<File|null>(null);

function upload(){

if(!bankId.trim()){

alert(

"Enter Bank Id."

);

return;

}

if(!file){

alert(

"Choose payment file."

);

return;

}

onUpload(

bankId,

file

);

setFile(null);

}

return(

<Card>

<div className="uploadGrid">

<div>

<label>

Bank Id

</label>

<input

value={bankId}

onChange={e=>

setBankId(

e.target.value

)

}

/>

</div>

<div>

<label>

Payment File

</label>

<UploadZone

file={file}

onFileSelected={

setFile

}

/>

</div>

</div>

<button

className="uploadButton"

disabled={loading}

onClick={upload}

>

{

loading?

"Uploading...":

"Upload Payment File"

}

</button>

</Card>

);

}
