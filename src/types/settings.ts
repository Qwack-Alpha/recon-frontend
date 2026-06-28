export interface SystemSettings{

organization_name:string;

timezone:string;

currency:string;

language:string;

auto_reconciliation:boolean;

ai_enabled:boolean;

}

export interface UpdateSettingsRequest{

organization_name:string;

timezone:string;

currency:string;

language:string;

auto_reconciliation:boolean;

ai_enabled:boolean;

}
