import { create } from 'zustand'
import UserType from '../models/User'
import axios, { AxiosError} from 'axios'

type UserStore = {
    users : UserType[],
    user : UserType,
    error : string,
    addUser : (user : UserType) => Promise<boolean>,
    loginUser : (user : UserType) => Promise<boolean>,
    logoutUser : () => Promise<boolean>,
    resetError : () => void
}

const useUserStore = create<UserStore>((set) => ({
    users : [],
    error: '',

    user : {
        username: '',
        password: '',
    },  

    resetError : () => {
        set({error : ''})
    },

    addUser : async (user : UserType) => {
        try {
            const newUser = {
            "username": user.username,
            "password": user.password
        };
        const response = await axios.post('http://localhost:8080/api/auth/register', newUser)
            set(state => ({
                users : [...state.users, response.data.user],
                error : ''
            }));
            return true
        } catch (error) {
            console.log('Error creating user', error);
            if(axios.isAxiosError(error) && error.response){
                set({ error : error.response.data.message })
            } else {
                set({ error : 'Error creating user' })
            }
            return false;
        }     
    },

    loginUser: async (user: UserType): Promise<boolean> => {
        try {
          const response = await axios.post('http://localhost:8080/api/auth/login', user);
          console.log('response', response.data);
          if (response.data.success) {
            sessionStorage.setItem(response.data.user.username, response.data.user.password);
            return true;
          } else {
            return false; 
          }
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            set({ error: error.response.data.message });
            console.log('error', error.response.data);
          }
          return false;
        }
      },

    logoutUser : async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/logout')
           console.log('response', response.data);
           if(response.data.success){
            sessionStorage.clear();
            return true;
           }
        } catch (error) {
            console.log('error', error.response.data);
        }
        return false;
    }

}))

export default useUserStore