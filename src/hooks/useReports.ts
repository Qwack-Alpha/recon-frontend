import {
    useMutation,
    useQuery,
} from "@tanstack/react-query";
import {
    getDashboardReport,
    exportReport,
} from "../services/reportService";
export function useReports() {
    const report = useQuery({
        queryKey: ["reports-dashboard"],
        queryFn: getDashboardReport,
    });
    const exportReportMutation = useMutation({
        mutationFn: exportReport,
    });
    return {
        report,
        exportReport: exportReportMutation,
    };
}