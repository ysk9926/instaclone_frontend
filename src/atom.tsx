import { atom } from "recoil";

const TOKEN = "token";

export const loggedinState = atom({
  key: "login",
  default: Boolean(localStorage.getItem(TOKEN)),
});

export const isDarkState = atom({
  key: "isDark",
  default: false,
});
