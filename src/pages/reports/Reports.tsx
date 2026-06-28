import "./Reports.css";

import{

Card,
Loader,
EmptyState,
PageContainer,
SectionHeader

}from"../../components/common";

import{

useReports

}from"../../hooks/useReports";

import ReportTable from "../../components/reports/ReportTable";

export default function Reports(){

const{

reports

}=useReports();

if(reports.isLoading){

return<Loader/>;

}

if(reports.isError){

return(

<EmptyState

title="Reports unavailable"

message="Please refresh."

/>

);

}

return(

<PageContainer>

<SectionHeader

title="Reports"

subtitle="Operational reporting"

 />

<Card>

<ReportTable

items={reports.data??[]}

/>

</Card>

</PageContainer>

);

}
