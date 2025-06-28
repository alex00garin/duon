import { createContext } from "react";

export type Language = "en" | "cy"; // English | Cymraeg (Welsh)

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
};

export const LanguageProviderContext =
  createContext<LanguageProviderState>(initialState);
