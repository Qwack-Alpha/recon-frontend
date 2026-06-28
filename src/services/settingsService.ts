import api from "../api/client";
import type {
    AISettings,
    UpdateAISettingsRequest,
} from "../types/settings";
export async function getSettings(): Promise<AISettings> {
    const response = await api.get<AISettings>(
        "/settings",
    );
    return response.data;
}
export async function updateSettings(
    request: UpdateAISettingsRequest,
): Promise<AISettings> {
    const response = await api.put<AISettings>(
        "/settings",
        request,
    );
    return response.data;
}