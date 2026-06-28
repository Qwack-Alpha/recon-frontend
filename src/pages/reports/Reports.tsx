
import "./Reports.css";
import { useState } from "react";
import type { CSSProperties } from "react";
import {
    Card,
    Loader,
    EmptyState,
    PageContainer,
    SectionHeader,
    StatCard,
    Button,
} from "../../components/common";
import { useReports } from "../../hooks/useReports";
import ReportTable from "../../components/reports/ReportTable";
const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 16,
};
const formStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 16,
    alignItems: "end",
    marginTop: 12,
};
export default function Reports() {
    const { report, exportReport } = useReports();
    const [reportType, setReportType] = useState("RECONCILIATION");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [format, setFormat] = useState("PDF");
    if (report.isLoading) {
        return <Loader />;
    }
    if (report.isError) {
        return (
            <EmptyState
                title="Reports unavailable"
                message="Unable to load report data. Please refresh."
            />
        );
    }
    function handleExport() {
        exportReport.mutate({
            report_type: reportType,
            start_date: startDate,
            end_date: endDate,
            format,
        });
    }
    const result = exportReport.data;
    return (
        <PageContainer>
            <SectionHeader
                title="Reports"
                subtitle="Operational reporting and exports"
            />
            <div style={gridStyle}>
                <StatCard
                    title="Total Transactions"
                    value={report.data?.total_transactions ?? 0}
                />
                <StatCard
                    title="Matched"
                    value={report.data?.matched ?? 0}
                />
                <StatCard
                    title="Unmatched"
                    value={report.data?.unmatched ?? 0}
                />
                <StatCard
                    title="Exceptions"
                    value={report.data?.exceptions ?? 0}
                />
            </div>
            <Card>
                <ReportTable report={report.data} />
            </Card>
            <Card>
                <h3>Export Report</h3>
                <div style={formStyle}>
                    <label>
                        Report Type
                        <select
                            value={reportType}
                            onChange={e => setReportType(e.target.value)}
                        >
                            <option value="RECONCILIATION">Reconciliation</option>
                            <option value="EXCEPTIONS">Exceptions</option>
                            <option value="TRANSACTIONS">Transactions</option>
                        </select>
                    </label>
                    <label>
                        Start Date
                        <input
                            type="date"
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)}
                        />
                    </label>
                    <label>
                        End Date
                        <input
                            type="date"
                            value={endDate}
                            onChange={e => setEndDate(e.target.value)}
                        />
                    </label>
                    <label>
                        Format
                        <select
                            value={format}
                            onChange={e => setFormat(e.target.value)}
                        >
                            <option value="PDF">PDF</option>
                            <option value="CSV">CSV</option>
                            <option value="XLSX">XLSX</option>
                        </select>
                    </label>
                    <Button
                        loading={exportReport.isPending}
                        onClick={handleExport}
                    >
                        Export
                    </Button>
                </div>
                {result && (
                    <p style={{ marginTop: 16 }}>
                        <a
                            href={result.report_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Download {result.report_name}
                        </a>
                    </p>
                )}
            </Card>
        </PageContainer>
    );
}