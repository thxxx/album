import { User } from "@supabase/supabase-js";
import { create } from "zustand";

export type UserState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: User | null) => {
    set((state) => ({ ...state, user: user }));
  },
}));
