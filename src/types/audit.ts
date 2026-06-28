export interface AuditLog{

id:string;

action:string;

entity:string;

entity_id:string;

performed_by:string;

performed_at:string;

details:string|null;

}
