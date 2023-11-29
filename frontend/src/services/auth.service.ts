import { APIEndpoints } from "@/constants/api-endpoints";
import { publicApi } from "@/lib/api";
import { LoginPayload } from "@/models/auth.models";

export class AuthApiService {
    static async login(payload:LoginPayload) {
        const res = await publicApi.post(APIEndpoints.LOGIN_URL, payload);
        return res.data;
    }
}