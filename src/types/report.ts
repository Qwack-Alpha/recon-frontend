export interface ReportSummary{

id:string;

name:string;

report_type:string;

generated_at:string;

generated_by:string;

status:string;

download_url:string|null;

}

export interface GenerateReportRequest{

report_type:string;

from_date:string;

to_date:string;

}
