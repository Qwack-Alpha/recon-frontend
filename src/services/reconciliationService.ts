import api from "../api/client";

import type{

ReconciliationItem,

RunReconciliationRequest,

ManualMatchRequest

}from"../types/reconciliation";

export async function getResults(){

const response=

await api.get<ReconciliationItem[]>(

"/reconciliation/results"

);

return response.data;

}

export async function runReconciliation(

request:RunReconciliationRequest

){

await api.post(

"/reconciliation/run",

request

);

}

export async function manualMatch(

request:ManualMatchRequest

){

await api.post(

"/reconciliation/manual-match",

request

);

}
