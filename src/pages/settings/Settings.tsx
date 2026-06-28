import "./Settings.css";

import {useEffect,useState} from "react";

import{

Loader,
EmptyState,
Card,
Button,
PageContainer,
SectionHeader

}from"../../components/common";

import{

useSettings

}from"../../hooks/useSettings";

export default function Settings(){

const{

settings,
save

}=useSettings();

const[form,setForm]=useState<any>(null);

useEffect(()=>{

if(settings.data){

setForm(settings.data);

}

},[settings.data]);

if(settings.isLoading){

return<Loader/>;

}

if(settings.isError){

return(

<EmptyState

title="Unable to load settings"

message="Please refresh."

/>

);

}

if(!form){

return null;

}

function change(

key:string,

value:any

){

setForm({

...form,

[key]:value

});

}

return(

<PageContainer>

<SectionHeader

title="Settings"

subtitle="System configuration"

/>

<Card>

<div className="settingsGrid">

<label>

Organization

<input

value={form.organization_name}

onChange={e=>change("organization_name",e.target.value)}

/>

</label>

<label>

Timezone

<input

value={form.timezone}

onChange={e=>change("timezone",e.target.value)}

/>

</label>

<label>

Currency

<input

value={form.currency}

onChange={e=>change("currency",e.target.value)}

/>

</label>

<label>

Language

<input

value={form.language}

onChange={e=>change("language",e.target.value)}

/>

</label>

<label>

<input

type="checkbox"

checked={form.auto_reconciliation}

onChange={e=>change("auto_reconciliation",e.target.checked)}

/>

Auto Reconciliation

</label>

<label>

<input

type="checkbox"

checked={form.ai_enabled}

onChange={e=>change("ai_enabled",e.target.checked)}

/>

AI Enabled

</label>

</div>

<Button

onClick={()=>save.mutate(form)}

>

Save Settings

</Button>

</Card>

</PageContainer>

);

}
