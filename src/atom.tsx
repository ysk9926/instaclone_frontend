import { atom } from "recoil";

export const loggedinState = atom({
  key: "login",
  default: false,
});

export const isDarkState = atom({
  key: "isDark",
  default: false,
});
