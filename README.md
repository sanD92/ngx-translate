# ngx-translate
to achieve i18n 

ngx-translate  [also try Google Translate]

Install and load ngx-translate

npm install @ngx-translate/core --save 
npm install @ngx-translate/http-loader

app.module.ts

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})


app.component.ts

import { TranslateService } from '@ngx-translate/core';

constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  
 switchLanguage(language: string) {
    this.translate.use(language);
  }
 
Create .json translation files [src/assets/i18n/en.json]
{
    "Title": "Translation example",
    "Intro": "Hello I am Arthur, I am 42 years old."
}

src/assets/i18n/fr.json
{
    "Title": "Exemple de traduction",
    "Intro": "Bonjour je m'appelle Arthur, j'ai 42 ans."
}

<h1 translate>Title</h1>

<div>
  {{ 'Intro' | translate:user }}
</div>


<button (click)="switchLanguage('en')">en</button>

<button (click)="switchLanguage('fr')">fr</button>
