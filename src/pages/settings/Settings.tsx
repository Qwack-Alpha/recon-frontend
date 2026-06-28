import "./Settings.css";
import { useEffect, useState } from "react";
import {
    Loader,
    EmptyState,
    Card,
    Button,
    PageContainer,
    SectionHeader,
} from "../../components/common";
import { useSettings } from "../../hooks/useSettings";
import { usePermissions } from "../../auth/usePermissions";
import type { AISettings } from "../../types/settings";
export default function Settings() {
    const { settings, save } = useSettings();
    const { can } = usePermissions();
    const [form, setForm] = useState<AISettings | null>(null);
    useEffect(() => {
        if (settings.data) {
            setForm(settings.data);
        }
    }, [settings.data]);
    if (settings.isLoading) {
        return <Loader />;
    }
    if (settings.isError) {
        return (
            <EmptyState
                title="Unable to load settings"
                message="Please refresh."
            />
        );
    }
    if (!form) {
        return null;
    }
    function change<K extends keyof AISettings>(
        key: K,
        value: AISettings[K],
    ) {
        setForm(prev => (prev ? ({ ...prev, [key]: value } as AISettings) : prev));
    }
    const canManage = can("settings.manage");
    return (
        <PageContainer>
            <SectionHeader
                title="Settings"
                subtitle="AI reconciliation configuration"
            />
            <Card>
                <div className="settingsGrid">
                    <label>
                        Matching Confidence Threshold
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            max="1"
                            value={form.matching_confidence_threshold}
                            onChange={e =>
                                change(
                                    "matching_confidence_threshold",
                                    Number(e.target.value),
                                )
                            }
                        />
                    </label>
                    <label>
                        Amount Tolerance
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={form.amount_tolerance}
                            onChange={e =>
                                change(
                                    "amount_tolerance",
                                    Number(e.target.value),
                                )
                            }
                        />
                    </label>
                    <label>
                        Date Tolerance (days)
                        <input
                            type="number"
                            step="1"
                            min="0"
                            value={form.date_tolerance_days}
                            onChange={e =>
                                change(
                                    "date_tolerance_days",
                                    Number(e.target.value),
                                )
                            }
                        />
                    </label>
                    <label>
                        Exchange Rate Source
                        <input
                            value={form.exchange_rate_source}
                            onChange={e =>
                                change(
                                    "exchange_rate_source",
                                    e.target.value,
                                )
                            }
                        />
                    </label>
                </div>
                <Button
                    loading={save.isPending}
                    disabled={!canManage}
                    onClick={() => form && save.mutate(form)}
                >
                    Save Settings
                </Button>
            </Card>
        </PageContainer>
    );
}