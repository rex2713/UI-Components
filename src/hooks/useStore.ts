import { create } from "zustand";

type State = {
  show: boolean;
  type?: "success" | "info" | "warn" | "error";
  title: string;
  description: string;
  delay?: number;
};
type Action = {
  alert: (
    type: State["type"],
    title?: State["title"],
    description?: State["description"],
    delay?: State["delay"],
  ) => void;
};
const useStoreAlert = create<State & Action>((set) => ({
  show: false,
  type: undefined,
  title: "",
  description: "",
  delay: 3000,
  alert: (
    type?: "success" | "info" | "warn" | "error",
    title?: string,
    description?: string,
    delay: number = 2500,
  ) => {
    set(() => ({
      show: true,
      type,
      title,
      description,
      delay,
    }));
    setTimeout(() => {
      set(() => ({
        show: false,
      }));
    }, delay);
  },
}));

export default useStoreAlert;
