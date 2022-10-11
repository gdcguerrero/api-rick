import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  public personaje$!: Observable<any>
  public name : string = 'Rick'

  constructor(private service: ApiService) {
    this.personaje$ = service.searchName(this.name)
  }

  onInput(){
    if (this.name.length > 3) {
      this.personaje$ = this.service.searchName(this.name)
    }
  }

}
