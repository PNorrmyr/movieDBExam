import { create } from 'zustand'
import UserType from '../models/User'
import axios from 'axios'

type UserStore = {
    users : UserType[],
    user : UserType,
    addUser : (user : UserType) => void
}

const useUserStore = create<UserStore>((set) => ({
    users : [],

    user : {
        username: '',
        password: '',
    },

    addUser : (user : UserType) => {
        const newUser = {
            "username": user.username,
            "password": user.password,
        }
        axios.post('http://localhost:8080/api/auth/register', newUser)
        .then(response => {
            set(state => ({
                users : [...state.users, response.data.user]
            }))
            return response.data.message
        })  
        .catch(error => {
            console.log('Error creating user', error);
            
        })     
    }


}))

export default useUserStore