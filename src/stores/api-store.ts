import { create } from "zustand";

type ApiStore = {
    apiKey : string,
    setApiKey : (newApiKey : string) => void
}

const useApiStore = create<ApiStore>((set) => ({
    apiKey : '',

    setApiKey : (newApiKey : string) => {
        set({
            apiKey : newApiKey
        })
    }
}))

export default useApiStore