import "./MainLayout.css";

import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";

import Topbar from "../components/layout/Topbar";

export default function MainLayout(){

    return(

        <div className="layout">

            <Sidebar/>

            <div className="layoutContent">

                <Topbar/>

                <main className="pageContent">

                    <Outlet/>

                </main>

            </div>

        </div>

    );

}
