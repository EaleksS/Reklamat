import { create } from "zustand";
import { persist } from "zustand/middleware";

type useStore = {
  views: number;
  setViews: (view: number) => void;
  balance: number;
  setBalance: (cent: number) => void;
  begin: boolean;
  setBegin: (bool: boolean) => void;
};

export const useStore = create(
  persist<useStore>(
    (set, get) => ({
      views: 0,
      setViews: (view) => {
        set({ views: get().views + view });
      },
      balance: 0,
      setBalance: (cent) => {
        set({ balance: get().balance + cent });
      },
      begin: false,
      setBegin: (bool) => {
        set({ begin: bool });
      },
    }),
    { name: "store" }
  )
);
