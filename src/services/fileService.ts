import api from "../api/client";

import type{

PaymentFile,

UploadFileResponse

}from"../types/file";

const FileService={

async upload(

bankId:string,

file:File

):Promise<UploadFileResponse>{

const form=new FormData();

form.append(

"bank_id",

bankId

);

form.append(

"file",

file

);

const response=

await api.post<UploadFileResponse>(

"/files/upload",

form,

{

headers:{

"Content-Type":

"multipart/form-data"

}

}

);

return response.data;

},

async history():Promise<PaymentFile[]>{

const response=

await api.get<PaymentFile[]>(

"/files"

);

return response.data;

}

};

export default FileService;
