export interface AISettings {
    matching_confidence_threshold: number;
    amount_tolerance: number;
    date_tolerance_days: number;
    exchange_rate_source: string;
}
export interface UpdateAISettingsRequest {
    matching_confidence_threshold: number;
    amount_tolerance: number;
    date_tolerance_days: number;
    exchange_rate_source: string;
}