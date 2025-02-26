import { User } from "@supabase/supabase-js";
import { create } from "zustand";

export type UserState = {
  user: User | null;
  lang: "ko" | "en";
  setUser: (user: User | null) => void;
  setLang: (lang: "ko" | "en") => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  lang: "en",
  setUser: (user: User | null) => {
    set((state) => ({ ...state, user: user }));
  },
  setLang: (lang: "ko" | "en") => {
    set((state) => ({ ...state, lang: lang }));
  },
}));
