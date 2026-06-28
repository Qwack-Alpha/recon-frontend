import {
    MdDashboard,
    MdUploadFile,
    MdPayments,
    MdCompareArrows,
    MdWarning,
    MdWork,
    MdSmartToy,
    MdAssessment,
    MdHistory,
    MdSettings,
} from "react-icons/md";

import type { IconType } from "react-icons";

export interface NavigationItem {

    label: string;

    path: string;

    icon: IconType;

    roles: Array<
        "ADMIN" |
        "OPS" |
        "AUDITOR" |
        "VIEWER"
    >;

}

export const navigation: NavigationItem[] = [

    {
        label: "Dashboard",
        path: "/",
        icon: MdDashboard,
        roles: ["ADMIN","OPS","AUDITOR","VIEWER"]
    },

    {
        label: "Files",
        path: "/files",
        icon: MdUploadFile,
        roles: ["ADMIN","OPS"]
    },

    {
        label: "Transactions",
        path: "/transactions",
        icon: MdPayments,
        roles: ["ADMIN","OPS"]
    },

    {
        label: "Reconciliation",
        path: "/reconciliation",
        icon: MdCompareArrows,
        roles: ["ADMIN","OPS"]
    },

    {
        label: "Exceptions",
        path: "/exceptions",
        icon: MdWarning,
        roles: ["ADMIN","OPS"]
    },

    {
        label: "Cases",
        path: "/cases",
        icon: MdWork,
        roles: ["ADMIN","OPS","AUDITOR"]
    },

    {
        label: "AI Copilot",
        path: "/ai",
        icon: MdSmartToy,
        roles: ["ADMIN","OPS"]
    },

    {
        label: "Reports",
        path: "/reports",
        icon: MdAssessment,
        roles: ["ADMIN","OPS","AUDITOR","VIEWER"]
    },

    {
        label: "Audit",
        path: "/audit",
        icon: MdHistory,
        roles: ["ADMIN","AUDITOR"]
    },

    {
        label: "Settings",
        path: "/settings",
        icon: MdSettings,
        roles: ["ADMIN"]
    }

];