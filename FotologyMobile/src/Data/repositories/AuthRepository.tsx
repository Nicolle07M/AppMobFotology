import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ResponseApiFotology } from '../source/remote/models/RespondeApiFotology';
import { ApiFotology } from "../source/remote/api/ApiFotology";

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
   } 