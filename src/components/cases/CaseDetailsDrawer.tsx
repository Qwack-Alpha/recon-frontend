import "./CaseDetailsDrawer.css";

import { useState } from "react";

import type {
    InvestigationCaseResponse
} from "../../types/case";

import {
    explain,
    recommend
} from "../../services/aiService";

interface Props {
    detail: InvestigationCaseResponse | null;
    onClose: () => void;
}

interface Analysis {
    explanation: string;
    recommendation: string;
    confidence: number;
}

export default function CaseDetailsDrawer({
    detail,
    onClose
}: Props) {

    const [loading, setLoading] = useState(false);

    const [analysis, setAnalysis] =
        useState<Analysis | null>(null);

    if (!detail) {
        return null;
    }

    const caseId = detail.overview.id;

    async function analyze() {
        setLoading(true);

        try {

            const [root, action] = await Promise.all([
                explain(caseId),
                recommend(caseId),
            ]);

            setAnalysis({
                explanation: root.explanation,
                recommendation: action.recommendation,
                confidence: root.confidence,
            });

        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="drawerOverlay">
            <div className="drawer">

            <div className="drawerHeader">
                <h2>{detail.overview.case_number}</h2>
                <button onClick={onClose}>✕</button>
            </div>

                <p className="drawerSubtitle">
                    Transaction: <strong>{detail.overview.transaction_reference}</strong>
                </p>

                <p className="drawerTitle">
                    {detail.overview.title}
                </p>

                <button
                    className="analyzeBtn"
                    disabled={loading}
                    onClick={analyze}
                >
                    {loading
                        ? "Analyzing..."
                        : "Analyze with AI"}
                </button>

                <h3>AI Root Cause</h3>

                <p>
                    {analysis?.explanation ??
                        "Click Analyze with AI to generate a root cause."}
                </p>

                <h3>AI Recommendation</h3>

                <p>
                    {analysis?.recommendation ??
                        "Click Analyze with AI to generate a recommendation."}
                </p>

                {analysis && (
                    <p className="confidence">
                        Confidence: {analysis.confidence}%
                    </p>
                )}

                <h3>Description</h3>

                <p>
                    {detail.overview.description ?? "-"}
                </p>

            </div>
        </div>
    );
}