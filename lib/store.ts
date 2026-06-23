// lib/store.ts
import { create } from "zustand";

type TimerStore = {
  mode: "pomodoro" | "custom";
  setMode: (mode: "pomodoro" | "custom") => void;
  timerHours: number;
  timerMinutes: number;
  intervalMinutes: number;
  isLoop: boolean;
  setTimerHours: (h: number) => void;
  setTimerMinutes: (m: number) => void;
  setIntervalMinutes: (m: number) => void;
  setIsLoop: (v: boolean) => void;
};

export const useTimerStore = create<TimerStore>((set) => ({
  mode: "custom",
  setMode: (mode) => set({ mode }),
  timerHours: 0,
  timerMinutes: 25,
  intervalMinutes: 5,
  isLoop: false,
  setTimerHours: (h) => set({ timerHours: h }),
  setTimerMinutes: (m) => set({ timerMinutes: m }),
  setIntervalMinutes: (m) => set({ intervalMinutes: m }),
  setIsLoop: (v) => set({ isLoop: v }),
}));
