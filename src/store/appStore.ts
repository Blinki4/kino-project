import {create} from "zustand/react";

interface AppState {
    isLoading: boolean;
    error: string;
    isSearchModalVisible: boolean;
}

interface AppActions {
    setIsLoading: (value: boolean) => void;
    setError: (error: string) => void;
    setIsSearchModalVisible: (value: boolean) => void;
}

export const useAppStore = create<AppState & AppActions>((set) => ({
    isLoading: false,
    error: '',
    isSearchModalVisible: false,

    setIsLoading: (value) => set({isLoading: value}),
    setError: (error) => set({error: error}),
    setIsSearchModalVisible: (value) => set({isSearchModalVisible: value})
}))