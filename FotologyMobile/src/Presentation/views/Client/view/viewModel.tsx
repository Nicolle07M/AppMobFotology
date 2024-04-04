import React from 'react'
import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';

export const WelcomeViewModel = () => {
 const removeSession = async () => {
 await RemoveUserLocalUseCase();
 }
 return {
 removeSession
 }
}


export default WelcomeViewModel; 
