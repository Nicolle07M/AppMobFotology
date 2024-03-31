import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ResponseApiFotology } from '../source/remote/models/RespondeApiFotology';
import { ApiFotology, ApiFotologyForImage } from "../source/remote/api/ApiFotology";

import mime from 'mime';
import { ImageInfo } from "expo-image-picker";

export class AuthRepositoryImpl implements AuthRepository {

    async register(user: User): Promise<ResponseApiFotology> {
    try {
    const response = await
   ApiFotology.post<ResponseApiFotology>('/users/create', user);
    return Promise.resolve(response.data);

    } catch (error) {

    let e = (error as AxiosError);
    console.log('error' + JSON.stringify(e.response?.data));
    const apiError:ResponseApiFotology =

   JSON.parse(JSON.stringify(e.response?.data));
    return Promise.resolve(apiError);
    }
    }

    async login(email: string, password: string):
   Promise<ResponseApiFotology> {
    try {
    const response = await
   ApiFotology.post<ResponseApiFotology>('/users/login', {
    email: email,
    password: password
    });
    return Promise.resolve(response.data);
   
    } catch (error) {
    let e = (error as AxiosError);
    console.log('error' + JSON.stringify(e.response?.data));
    const apiError:ResponseApiFotology =
   JSON.parse(JSON.stringify(e.response?.data));
    return Promise.resolve(apiError);
    }
    }

    async registerWithImage(user: User, file: ImageInfo): Promise<ResponseApiFotology> {
        try {
            let data = new FormData();
            data.append('image', {
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            } as any);
            data.append('user', JSON.stringify(user));
    
            const response = await ApiFotologyForImage.post<ResponseApiFotology>('/users/createWithImage', data);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('error' + JSON.stringify(e.response?.data));
            const apiError: ResponseApiFotology = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
    
   } 