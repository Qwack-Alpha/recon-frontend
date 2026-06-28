import {

    BrowserRouter,

    Routes,

    Route

} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Settings from "./pages/settings/Settings";

import AICopilot from "./pages/ai/AICopilot";

import Audit from "./pages/audit/Audit";

import Cases from "./pages/cases/Cases";

import Exceptions from "./pages/exceptions/Exceptions";

import Reconciliation from "./pages/reconciliation/Reconciliation";

import Transactions from "./pages/transactions/Transactions";

import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/auth/Login";

import Dashboard from "./pages/dashboard/Dashboard";

import Files from "./pages/files/Files";

import Reports from "./pages/reports/Reports";

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route

                    path="/login"

                    element={<Login />}

                />

                <Route

                    path="/"

                    element={

                        <ProtectedRoute>

                            <MainLayout />

                        </ProtectedRoute>

                    }

                >

                    <Route

                        index

                        element={<Dashboard />}

                    />

                    <Route
                        path="files"
                        element={<Files />}
                    />

                    <Route

                    path="transactions"

                    element={<Transactions/>}

                    />

                    <Route

                    path="reconciliation"

                    element={<Reconciliation/>}

                    />

                    <Route

                    path="exceptions"

                    element={<Exceptions/>}

                    />

                    <Route
                        path="cases"
                        element={<Cases/>}
                    />

                    <Route

                    path="ai"

                    element={<AICopilot/>}

                    />

                    <Route
                        path="reports"
                        element={<Reports/>}
                    />

                    <Route
                        path="audit"
                        element={<Audit/>}
                    />

                    <Route
                        path="settings"
                        element={<Settings/>}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}