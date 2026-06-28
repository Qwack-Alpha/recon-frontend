import "./Topbar.css";

import {

    MdNotificationsNone,

    MdSearch

} from "react-icons/md";

export default function Topbar(){

return(

<header className="topbar">

<div className="searchBox">

<MdSearch size={20}/>

<input

placeholder="Search transactions, cases..."

/>

</div>

<div className="topbarRight">

<button className="iconButton">

<MdNotificationsNone size={24}/>

</button>

<div className="profile">

<div className="profileAvatar">

A

</div>

<div>

<div className="profileName">

Admin

</div>

<div className="profileRole">

Administrator

</div>

</div>

</div>

</div>

</header>

);

}
