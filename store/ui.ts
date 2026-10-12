import { create } from "zustand";

export type ExperienceTab = "embedded" | "systems" | "webmobile";

type UIState = {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
  toggleNav: () => void;

  experienceTab: ExperienceTab;
  setExperienceTab: (tab: ExperienceTab) => void;

  hour12: boolean;
  toggleHour12: () => void;
};

export const useUI = create<UIState>()((set) => ({
  navOpen: false,
  setNavOpen: (navOpen) => set({ navOpen }),
  toggleNav: () => set((s) => ({ navOpen: !s.navOpen })),

  experienceTab: "embedded",
  setExperienceTab: (experienceTab) => set({ experienceTab }),

  hour12: false,
  toggleHour12: () => set((s) => ({ hour12: !s.hour12 })),
}));