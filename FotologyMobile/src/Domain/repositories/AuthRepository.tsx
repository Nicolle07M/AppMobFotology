import { ResponseApiFotology } from "../../Data/source/remote/models/RespondeApiFotology";
import { User } from "../entities/User";
export interface AuthRepository {
    login(email: string, password: string ): Promise<ResponseApiFotology>;
 register(user: User): Promise<ResponseApiFotology>;
} 