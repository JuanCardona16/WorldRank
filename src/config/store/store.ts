import { create } from "zustand";
import { ValueSelect } from "../../components/UI/FilterForm/interfaces";

interface StoreState {
  TotalContries: number,
  Search: string;
  SortBy: string;
  Regions: string[];
  Status: {
    MembersOfTheUnitedNations: boolean;
    Independent: boolean;
  };
  setSortBy: (sortBy: string) => void;
  setRegions: (region: string) => void;
  setStatus: (status: { MembersOfTheUnitedNations: boolean; Independent: boolean }) => void;
  setSearch: (search: string) => void;
  setTotalCountries: (totalCountries: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  TotalContries: 0,
  Search: "",
  SortBy: ValueSelect.Population,
  Regions: [],
  Status: {
    MembersOfTheUnitedNations: false,
    Independent: false,
  },
  setSortBy: (sortBy: string) => set({ SortBy: sortBy }),
  setRegions: (region: string) =>
    set((state) => ({
      Regions: state.Regions.includes(region)
        ? state.Regions.filter((currentRegion) => currentRegion !== region)
        : [...state.Regions, region],
    })),
  setStatus: (status) => set(() => ({
    Status: status
  })),
  setSearch: (search: string) => set({ Search: search }),
  setTotalCountries: (TotalContries: number) => set({ TotalContries: TotalContries })
}));
