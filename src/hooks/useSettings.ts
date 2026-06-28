import{

useMutation,
useQuery,
useQueryClient

}from"@tanstack/react-query";

import{

getSettings,
updateSettings

}from"../services/settingsService";

export function useSettings(){

const client=

useQuery({

queryKey:["settings"],

queryFn:getSettings

});

const queryClient=

useQueryClient();

const save=

useMutation({

mutationFn:updateSettings,

onSuccess:()=>{

queryClient.invalidateQueries({

queryKey:["settings"]

});

}

});

return{

settings:client,

save

};

}
