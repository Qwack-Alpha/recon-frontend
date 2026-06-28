import api from "../api/client";

import type{

ReportSummary,
GenerateReportRequest

}from"../types/report";

export async function getReports(){

const response=

await api.get<ReportSummary[]>(

"/reports"

);

return response.data;

}

export async function generateReport(

request:GenerateReportRequest

){

await api.post(

"/reports",

request

);

}
