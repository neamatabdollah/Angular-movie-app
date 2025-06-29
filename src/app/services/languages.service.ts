import { Injectable, signal, computed, effect } from '@angular/core';

export interface Language {
  code: string;
  name: string;
  direction: 'ltr' | 'rtl';
  flag: string;
}

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  private languages: Language[] = [
    { code: 'en', name: 'English', direction: 'ltr', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', direction: 'rtl', flag: '🇸🇦' },
    { code: 'fr', name: 'Français', direction: 'ltr', flag: '🇫🇷' },
    { code: 'zh', name: '中文', direction: 'ltr', flag: '🇨🇳' },
  ];

  private currentLanguage = signal<Language>(this.languages[0]);

  // Computed signals
  public language = computed(() => this.currentLanguage());
  public isRTL = computed(() => this.currentLanguage().direction === 'rtl');

  constructor() {
    // Load saved language
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      const lang = this.languages.find((l) => l.code === savedLang);
      if (lang) {
        this.currentLanguage.set(lang);
      }
    }

    // Effect to update DOM when language changes
    effect(() => {
      const lang = this.currentLanguage();
      document.documentElement.dir = lang.direction;
      document.documentElement.lang = lang.code;
    });
  }

  getLanguages(): Language[] {
    return this.languages;
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    localStorage.setItem('selectedLanguage', language.code);
  }

  setLanguageByCode(code: string): void {
    const lang = this.languages.find((l) => l.code === code);
    if (lang) {
      this.setLanguage(lang);
    }
  }
}
