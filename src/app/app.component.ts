import {Component} from '@angular/core';

interface ISearchOption {
  title: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-stranka';
  search = ''; // content inputu (search políčka)
  resultStorage: ISearchOption[] = [
    {title: ' home ', path: ''},
    {title: ' O nás ', path: 'about'},
    {title: ' Kontaktní formulář ', path: 'contact'},
  ];

  getFilteredOptions(): ISearchOption[] {
    const result: ISearchOption[] = []; // pole na uložení možností odpovídající searchi
    for (const option of this.resultStorage) {
      if (option.title.includes(this.search)) { // pokud title obsahuje hledaný výraz
        result.push(option); // tak se uloží do resultu.
      }
    }
    return result;
  }
}
