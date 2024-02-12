import { Component, OnInit, inject } from '@angular/core';
import { ElixirsService } from '../services/elixirs.service';
import { Elixirs } from '../interface/elixirs';

@Component({
  selector: 'app-elixirs',
  standalone: true,
  imports: [],
  templateUrl: './elixirs.component.html',
  styleUrl: './elixirs.component.css'
})
// export class ElixirsComponent implements OnInit {
//    // http = inject(HttpClient);
//    private elixirservice = inject(ElixirsService);
//     elixirs: any =[];


//    ngOnInit(): void {
//      this.loadElixirs();
//    }

//    loadElixirs(){
//      this.elixirservice.getElixirs().subscribe((elixirs:any)=>{
//        console.log("Fetched Successfully");
//        this.elixirs=elixirs;
//      });
//    }
// }

export class ElixirsComponent {
  elixirs: Elixirs[] = [];
  elixirservice= inject(ElixirsService);
  filteredElixirs:Elixirs[] = [];
  totalItems: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalpages = 0;
  pages : number[] = [];

  constructor(){
    this.elixirservice.getElixirs().then((res:any)=>{
      this.elixirs = res;
      this.filteredElixirs = res;
      this.totalItems=this.filteredElixirs.length;
      if(this.totalItems){
        this.totalpages  = Math.ceil(this.totalItems/this.itemsPerPage);
        this.pages = Array.from({length: this.totalpages}, (_,i)=>i+1);
      }
    });
  }
  filterResults(text:String){
    if(!text) this.filteredElixirs = this.elixirs;

    this.filteredElixirs=this.elixirs.filter(
      res => res?.name.toLowerCase().includes(text.toLowerCase())
    )
  }

  pageClicked(page: number){
    this.currentPage=page;
  }

  nextpage(){
    this.currentPage=this.currentPage+1;
  }
  prevpage(){
    this.currentPage=this.currentPage-1;
  }

  get paginatedData(){
    const start = (this.currentPage -1) * (this.itemsPerPage)
    const end = start + this.itemsPerPage;
    return this.filteredElixirs.slice(start,end);
  }
}


