import { ResponseApiFotology } from "../../Data/source/remote/models/RespondeApiFotology";
import { User } from "../entities/User";
import * as ImagePicker from 'expo-image-picker';

export interface AuthRepository {
    login(email: string, password: string ): Promise<ResponseApiFotology>;
    register(user: User): Promise<ResponseApiFotology>;
    registerWithImage(user: User, file: ImagePicker.ImageInfo): Promise<ResponseApiFotology>;
} 