import api from "../api/client";
import type { PaymentFile } from "../types/file";
const FileService = {
    async upload(
        bankId: string,
        file: File,
    ): Promise<PaymentFile> {
        const form = new FormData();
        form.append("bank_id", bankId);
        form.append("file", file);
        const response = await api.post<PaymentFile>(
            "/files/upload",
            form,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            },
        );
        return response.data;
    },
    async history(): Promise<PaymentFile[]> {
        const response = await api.get<PaymentFile[]>(
            "/files",
        );
        return response.data;
    },
};
export default FileService;