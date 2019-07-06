import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'ngx-translate-demo';

  user = {
    name: 'Sandip',
    age: 42
  };
  constructor(private translate: TranslateService){
    translate.setDefaultLang('en');
  }
}
