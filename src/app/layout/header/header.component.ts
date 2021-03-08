import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  select: boolean = true;
  lang: boolean = true;
  typeLang = 'en';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
  }

  ngOnInit(): void {}

  onChange222 = () => {
    console.log('ok');

    this.translate.use('vi');
  };

  showMenu() {
    this.select = false;
    console.log(this.select);
  }
  closeMenu() {
    this.select = true;
  }

  changeLang() {
    if (this.typeLang === 'en') {
      this.translate.use('vi');
      this.typeLang = 'vi';
    } else {
      this.translate.use('en');
      this.typeLang = 'en';
    }
    this.lang = !this.lang;
  }
}
