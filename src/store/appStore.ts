import {create} from "zustand/react";

interface AppState {
    isLoading: boolean;
    error: string;
}

interface AppActions {
    setIsLoading: (value: boolean) => void;
    setError: (error: string) => void;
}

export const useAppStore = create<AppState & AppActions>((set) => ({
    isLoading: false,
    error: '',

    setIsLoading: (value) => set({isLoading: value}),
    setError: (error) => set({error: error})
}))