export interface AIQuestionRequest{

question:string;

case_id?:string|null;

}

export interface AIChatMessage{

role:string;

message:string;

created_at:string;

}

export interface AIChatResponse{

answer:string;

tokens_used:number;

conversation:AIChatMessage[];

}

export interface ConversationHistoryItem{

id:string;

question:string;

created_at:string;

}

export interface ConversationHistoryResponse{

history:ConversationHistoryItem[];

}

export interface AIInsightResponse{

explanation:string;

recommendation:string;

confidence:number;

}
