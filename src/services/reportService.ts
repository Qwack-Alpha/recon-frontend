import api from "../api/client";
import type {
    DashboardReport,
    ReportRequest,
    ReportResponse,
} from "../types/report";
export async function getDashboardReport(): Promise<DashboardReport> {
    const response = await api.get<DashboardReport>(
        "/reports/dashboard",
    );
    return response.data;
}
export async function exportReport(
    request: ReportRequest,
): Promise<ReportResponse> {
    const response = await api.post<ReportResponse>(
        "/reports/export",
        request,
    );
    return response.data;
}
