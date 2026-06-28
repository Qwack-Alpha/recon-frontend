import{

useMutation,
useQuery,
useQueryClient

}from"@tanstack/react-query";

import{

getReports,
generateReport

}from"../services/reportService";

export function useReports(){

const client=

useQueryClient();

const reports=

useQuery({

queryKey:["reports"],

queryFn:getReports

});

const generate=

useMutation({

mutationFn:generateReport,

onSuccess:()=>{

client.invalidateQueries({

queryKey:["reports"]

});

}

});

return{

reports,
generate

};

}
