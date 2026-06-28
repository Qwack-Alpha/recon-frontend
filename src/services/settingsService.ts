import api from "../api/client";

import type{

SystemSettings,
UpdateSettingsRequest

}from"../types/settings";

export async function getSettings(){

const response=

await api.get<SystemSettings>(

"/settings"

);

return response.data;

}

export async function updateSettings(

request:UpdateSettingsRequest

){

await api.put(

"/settings",

request

);

}
