export type FileStatus =
    | "UPLOADED"
    | "PROCESSING"
    | "PROCESSED"
    | "FAILED";

export interface UploadFileRequest{

    bank_id:string;

    file:File;

}

export interface UploadFileResponse{

    success:boolean;

    message:string;

}

export interface PaymentFile{

    id:string;

    filename:string;

    bank_id:string;

    uploaded_at:string;

    status:FileStatus;

}

export interface FileFilter{

    search:string;

    status:"ALL"|FileStatus;

}
