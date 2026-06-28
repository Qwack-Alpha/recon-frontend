import "./Reconciliation.css";

import { useMemo, useState } from "react";

import {
    Card,
    Loader,
    EmptyState,
    PageContainer,
    SectionHeader,
} from "../../components/common";

import { useReconciliation } from "../../hooks/useReconciliation";

import type { ReconciliationItem } from "../../types/reconciliation";

import ReconciliationStatistics from "../../components/reconciliation/ReconciliationStatistics";
import ReconciliationFilters from "../../components/reconciliation/ReconciliationFilters";
import ReconciliationTable from "../../components/reconciliation/ReconciliationTable";
import ManualMatchDialog from "../../components/reconciliation/ManualMatchDialog";

export default function Reconciliation() {

    const {
        results,
        match,
    } = useReconciliation();

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("ALL");

    const [selected, setSelected] =
        useState<ReconciliationItem | null>(null);

    const filtered = useMemo(() => {

        const data = results.data ?? [];

        return data.filter(item => {

            const searchMatch =
                item.payment_reference
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const statusMatch =
                status === "ALL" ||
                item.status === status;

            return searchMatch && statusMatch;

        });

    }, [results.data, search, status]);

    if (results.isLoading) {
        return <Loader />;
    }

    if (results.isError) {

        return (

            <EmptyState
                title="Unable to load reconciliation results"
                message="Please refresh the page."
            />

        );

    }

    return (

        <PageContainer>

            <SectionHeader
                title="Reconciliation"
                subtitle="AI-assisted reconciliation workspace"
            />

            <ReconciliationStatistics
                items={results.data ?? []}
            />

            <Card>

                <ReconciliationFilters
                    search={search}
                    status={status}
                    onSearch={setSearch}
                    onStatusChange={setStatus}
                />

                <ReconciliationTable
                    items={filtered}
                    onManualMatch={setSelected}
                />

            </Card>

            <ManualMatchDialog
                item={selected}
                loading={match.isPending}
                onClose={() => setSelected(null)}
                onSubmit={(bankTransactionId) => {

                    if (!selected) return;

                    match.mutate({

                        payment_transaction_id:
                            selected.payment_transaction_id,

                        bank_transaction_id:
                            bankTransactionId,

                    });

                    setSelected(null);

                }}
            />

        </PageContainer>

    );

}
