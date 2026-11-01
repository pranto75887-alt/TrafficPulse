import { LanguageMode } from '../types';

export const getApiLanguage = (lang: LanguageMode): 'bengali' | 'hindi' | 'spanish' | 'english' => {
  if (lang === 'bn') return 'bengali';
  if (lang === 'hi') return 'hindi';
  if (lang === 'es') return 'spanish';
  return 'english';
};

export interface LangInfo {
  code: LanguageMode;
  label: string;
  native: string;
  flag: string;
}

export const languages: LangInfo[] = [
  { code: 'en', label: 'English', native: 'English', flag: '🇺🇸' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা', flag: '🇧🇩' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', label: 'Spanish', native: 'Español', flag: '🇪🇸' },
];

export const getUiText = (lang: LanguageMode, translations: { bn: string; hi?: string; es?: string; en: string }): string => {
  if (lang === 'bn') return translations.bn;
  if (lang === 'hi') return translations.hi || translations.en;
  if (lang === 'es') return translations.es || translations.en;
  return translations.en;
};
