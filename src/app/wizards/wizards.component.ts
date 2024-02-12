import { Component, OnInit, inject } from '@angular/core';
import { WizardsService } from '../services/wizards.service';
import { Wizards } from '../interface/wizards';

@Component({
  selector: 'app-wizards',
  standalone: true,
  imports: [],
  templateUrl: './wizards.component.html',
  styleUrl: './wizards.component.css'
})
// export class WizardsComponent implements OnInit{
//   private wizardservice = inject(WizardsService);
//   wizards: any =[];

//   ngOnInit(): void {
//     this.loadWizards();
//   }

//   loadWizards(){
//     this.wizardservice.getWizards().subscribe((wizards:any)=>{
//       console.log("Fetched Successfully");
//       this.wizards=wizards;
//     });
//   }
// }

export class WizardsComponent {
  wizards: Wizards[] =[];
  filteredwizards: Wizards[] = [];
  totalItems: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 50;
  totalpages = 0;
  pages : number[] = [];
  wizardservice = inject(WizardsService);

  constructor(){
    this.wizardservice.getWizards().then((res:any)=>{
      this.wizards = res;
      this.filteredwizards = res;
      this.totalItems=this.filteredwizards.length;
      if(this.totalItems){
        this.totalpages  = Math.ceil(this.totalItems/this.itemsPerPage);
        this.pages = Array.from({length: this.totalpages}, (_,i)=>i+1);
      }
    });
  }

  filterResults(text:String){
    if(!text) this.filteredwizards = this.wizards;
    this.filteredwizards=this.wizards.filter(
      res => res?.lastName.toLowerCase().includes(text.toLowerCase())
    )
    this.totalItems=this.filteredwizards.length;
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
    return this.filteredwizards.slice(start,end);
  }

}
