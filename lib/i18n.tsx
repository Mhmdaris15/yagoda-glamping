"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "ru" | "en";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
  tList: (path: string) => string[];
};

const Ctx = createContext<LangCtx | null>(null);

const STORAGE_KEY = "yagoda-lang";

import { dictionaries } from "./dictionaries";

function resolveRaw(dict: Record<string, unknown>, path: string): unknown {
  const segs = path.split(".");
  let cur: unknown = dict;
  for (const s of segs) {
    if (cur && typeof cur === "object" && s in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[s];
    } else {
      return undefined;
    }
  }
  return cur;
}

function resolve(dict: Record<string, unknown>, path: string): string {
  const v = resolveRaw(dict, path);
  return typeof v === "string" ? v : path;
}

function resolveList(dict: Record<string, unknown>, path: string): string[] {
  const v = resolveRaw(dict, path);
  if (Array.isArray(v)) return v.filter((x) => typeof x === "string") as string[];
  return [];
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem(STORAGE_KEY) as Lang)) || null;
    if (stored === "ru" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  };

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      setLang,
      t: (path: string) => resolve(dictionaries[lang] as unknown as Record<string, unknown>, path),
      tList: (path: string) => resolveList(dictionaries[lang] as unknown as Record<string, unknown>, path),
    }),
    [lang]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useT() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useT must be inside LanguageProvider");
  return ctx;
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be inside LanguageProvider");
  return ctx;
}
