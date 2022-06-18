import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService {

  constructor(private translateService: TranslateService) {
    const lang = this.getLangFromLocalStorage();
    if (lang) {
      this.use(lang);
    } else {
      this.lang.next(this.translateService.currentLang);
    }
  }
  static defaultLanguageCode = 'fr';
  static defaultCountryCode = 'FR';

  public lang = new BehaviorSubject<string>('fr');
  public orientation = new BehaviorSubject<string>('ltr');
  static getCurrentLanguageCode(): string {
    const userLang: any = localStorage.getItem('lang');
    if (userLang) {
      return userLang.userLanguage;
    } else {
      return LangService.defaultLanguageCode;
    }
  }

  use(lang) {
    this.translateService.use(lang);
    this.saveLangToLocalStorage(lang);
    this.lang.next(lang);
    this.get('orientation').subscribe(newOrientation => {
      this.orientation.next(newOrientation);
    });
  }

  saveLangToLocalStorage(lang) {
    localStorage.setItem('lang', lang);
  }

  getLangFromLocalStorage(): string {
    return localStorage.getItem('lang');
  }

  getCurrentLanguageObservable(): BehaviorSubject<string> {
    return this.lang;
  }

  addLangs(langs: string[]) {
    this.translateService.addLangs(langs);
  }

  setDefaultLang(lang: string) {
    this.translateService.setDefaultLang(lang);
  }

  get(key: string | Array<string>, interpolateParams?: any): Observable<string | any> {
    return this.translateService.get(key, interpolateParams);
  }
}
