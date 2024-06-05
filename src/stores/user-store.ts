import { create } from 'zustand'
import UserType from '../models/User'
import axios from 'axios'

type UserStore = {
    users : UserType[],
    user : UserType,
    error : string,
    addUser : (user : UserType) => Promise<boolean>
}

const useUserStore = create<UserStore>((set) => ({
    users : [],

    user : {
        username: '',
        password: '',
    },

    error: '',

    addUser : async (user : UserType) => {
        try {
            const newUser = {
            "username": user.username,
            "password": user.password
            }
        const response = await axios.post('http://localhost:8080/api/auth/register', newUser)
            set(state => ({
                users : [...state.users, response.data.user],
                error : ''
            })) 
            return true
        } catch (error) {
            console.log('Error creating user', error);
            if(axios.isAxiosError(error) && error.response){
                set({ 
                    error : error.response.data.message
                })
            } else {
                set({
                    error : 'Error creating user'
                })
            }
            return false
        }     
    }
}))

export default useUserStore