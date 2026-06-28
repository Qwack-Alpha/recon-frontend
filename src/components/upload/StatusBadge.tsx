import "./StatusBadge.css";

import type{

FileStatus

}from"../../types/file";

interface Props{

status:FileStatus;

}

export default function StatusBadge({

status

}:Props){

return(

<span

className={

"status "+

status.toLowerCase()

}

>

{status}

</span>

);

}
