import {create} from "zustand/react";

interface FiltersState {
    genre: string;
    year: string;
    rating: string;
}

interface FiltersActions {
    setGenre: (genre: string) => void;
    setYear: (year: string) => void;
    setRating: (rating: string) => void;
}

export const useFiltersStore = create<FiltersState & FiltersActions>((set) => ({
    genre: '',
    year: '',
    rating: '',

    setGenre: (genre: string) => set({genre: genre}),
    setYear: (year: string) => set({year: year}),
    setRating: (rating: string) => set({rating: rating}),
}))