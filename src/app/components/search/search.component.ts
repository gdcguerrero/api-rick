import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  public personaje!: Observable<any>
  public cartoon: any
  public apiList: any

  constructor(private service: ApiService) {
    this.getList()
    this.onClick('Rick')
  }

  onClick(name:string){
      this.personaje = this.service.searchName(name)
      this.personaje.subscribe(resp => this.cartoon = resp)
  }
  
  getList(){
      this.service.getList().subscribe(resp => this.apiList = resp)
  }


}
