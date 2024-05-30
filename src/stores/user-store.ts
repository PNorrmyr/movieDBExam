import { create } from 'zustand'
import UserType from '../models/User'

type UserStore = {
    users : UserType[]
}

const useUserStore = create<UserStore>((set) => ({
    users : [],

    addUser : (user : UserType) => {
        set(state => ({
            users : [...state.users, user]
        }))
    }


}))