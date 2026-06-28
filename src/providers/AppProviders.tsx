import type {

ReactNode

} from "react";

import {

QueryClient,

QueryClientProvider

} from "@tanstack/react-query";

import {

Toaster

} from "react-hot-toast";

import {

AuthProvider

} from "../auth/AuthContext";

const client=

new QueryClient();

export default function AppProviders(

{

children

}:{

children:ReactNode

}

){

return(

<QueryClientProvider

client={client}

>

<AuthProvider>

{children}

<Toaster

position="top-right"

/>

</AuthProvider>

</QueryClientProvider>

);

}
