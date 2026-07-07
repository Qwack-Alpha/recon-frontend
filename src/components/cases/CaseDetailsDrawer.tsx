import "./CaseDetailsDrawer.css";

import { useState } from "react";

import type {
    InvestigationCaseResponse
} from "../../types/case";

import type {
    AIInsightResponse
} from "../../types/ai";

import {
    explain
} from "../../services/aiService";

interface Props {
    detail: InvestigationCaseResponse | null;
    onClose: () => void;
}

type Analysis = AIInsightResponse;

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

            const result = await explain(caseId);

            setAnalysis(result);

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

                    Transaction:

                    <strong>
                        {" "}
                        {detail.overview.transaction_reference}
                    </strong>

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

                <h3>Summary</h3>

                <p>

                    {analysis?.summary ??

                        "Click Analyze with AI to generate an investigation summary."}

                </p>

                <h3>Root Cause</h3>

                <p>

                    {analysis?.root_cause ??

                        "Root cause will appear here."}

                </p>

                <h3>Business Impact</h3>

                <p>

                    {analysis?.business_impact ??

                        "-"}

                </p>

                <h3>Operational Domain</h3>

                <p>

                    {analysis?.operational_domain ??

                        "-"}

                </p>

                {analysis && (

                    <>

                        <h3>Evidence</h3>

                        <table className="evidenceTable">

                            <thead>

                                <tr>

                                    <th>Field</th>

                                    <th>Payment</th>

                                    <th>Bank</th>

                                    <th>Result</th>

                                </tr>

                            </thead>

                            <tbody>

                                {analysis.evidence.map(item => (

                                    <tr key={item.field}>

                                        <td>{item.field}</td>

                                        <td>{item.payment}</td>

                                        <td>{item.bank}</td>

                                        <td>{item.result}</td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </>

                )}

                {analysis && (

                    <>

                        <h3>Recommended Actions</h3>

                        <ul className="recommendationList">

                            {analysis.recommended_actions.map(action => (

                                <li key={action}>

                                    ✓ {action}

                                </li>

                            ))}

                        </ul>

                    </>

                )}

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