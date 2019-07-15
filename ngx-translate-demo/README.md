# NgxTranslateDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## How to use ngx-translate

<strong>ngx-translate  [also try Google Translate]</strong></br>

##### Install and load ngx-translate</br>
npm install @ngx-translate/core --save </br>
npm install @ngx-translate/http-loader</br>

#####  app.module.ts </br>
import { HttpClientModule, HttpClient } from '@angular/common/http'; </br>
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'; </br>
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; </br>
  
export function HttpLoaderFactory(http: HttpClient) { 
  return new TranslateHttpLoader(http); 
}
</br>


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
</br>
#####  app.component.ts </br>
import { TranslateService } from '@ngx-translate/core'; </br>
constructor(private translate: TranslateService) { </br>
    translate.setDefaultLang('en'); </br>
  }  </br>
 switchLanguage(language: string) { </br>
    this.translate.use(language); </br>
  } </br>
 </br>
 
##### Create .json translation files [src/assets/i18n/en.json]  </br>
{  
    "Title": "Translation example",  
    "Intro": "Hello I am Arthur, I am 42 years old."  
}  
</br>
src/assets/i18n/fr.json  
{  
    "Title": "Exemple de traduction",  
    "Intro": "Bonjour je m'appelle Arthur, j'ai 42 ans."  
}  
</br>

#####  <strong>html file</strong>

{{ 'Intro' | translate:user }} </br> 
<button (click)="switchLanguage('en')">en</button>
<button (click)="switchLanguage('fr')">fr</button>  


## Handle ngx-trnalate in ts file:

this.getInternationalizationLabel('key');<br/>

<strong>-----------------Method to read json file key------------------------</strong><br/>
  getInternationalizationLabel(key) {  
    let label;  
    this.subscriptions.push(this.translate.get(key).subscribe(  
      data => label = data  
    ));  
    return label;  
  }  
  <br/>
  
  getInternationalizationLabel(key) {  
    let label;  
    this.subscription = (this.translate.get(key).subscribe(  
      data => label = data  
    ));  
    return label;  
  }  
  <br/>
<strong>-----------------Alternative Method to read json file key------------------------</strong><br/>
  getInternationalizationLabel(key) {  
    return this.translate.instant(key);  
 }<br/>  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


