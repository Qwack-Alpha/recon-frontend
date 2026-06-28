import{

useMutation,

useQuery,

useQueryClient

}from"@tanstack/react-query";

import FileService from "../services/fileService";

export function useFiles(){

const client=

useQueryClient();

const files=

useQuery({

queryKey:["files"],

queryFn:FileService.history

});

const upload=

useMutation({

mutationFn:({

bankId,

file

}:{

bankId:string;

file:File;

})=>

FileService.upload(

bankId,

file

),

onSuccess(){

client.invalidateQueries({

queryKey:["files"]

});

}

});

return{

files,

upload

};

}
