import api from "../api/client";

import type{

AuditLog

}from"../types/audit";

export async function getAuditLogs(){

const response=

await api.get<AuditLog[]>(

"/audit"

);

return response.data;

}
