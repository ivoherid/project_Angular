import { Component, Input, OnInit, Output, inject, input } from '@angular/core';
import { SpellsService } from '../services/spells.service';
import { Spells } from '../interface/spells';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-spells',
  standalone: true,
  imports: [],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.css'
})
// export class SpellsComponent implements OnInit {
//   private spellservice = inject(SpellsService);
//   spells: any =[];

//   ngOnInit(): void {
//     this.loadSpells();
//   }

//   loadSpells(){
//     this.spellservice.getSpells().subscribe((spells:any)=>{
//       console.log("Fetched Successfully");
//       this.spells=spells;
//     });
//   }
// }

export class SpellsComponent{
  spells: Spells[] =[];
  filteredspells: Spells[] = [];
  spellservice = inject(SpellsService);
  @Output() onClick: EventEmitter<Number> = new EventEmitter();

  totalItems: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 50;
  totalpages = 0;
  pages : number[] = [];

  constructor(){
    this.spellservice.getSpells().then((res:any)=>{
      this.spells = res;
      this.filteredspells=res;
      this.totalItems=this.filteredspells.length;
      if(this.totalItems){
        this.totalpages  = Math.ceil(this.totalItems/this.itemsPerPage);
        this.pages = Array.from({length: this.totalpages}, (_,i)=>i+1);
      }
    });
  }

  filterResults(text:String){
    // alert(this.filteredspells.length)
    if(!text) this.filteredspells = this.spells;
    this.filteredspells=this.spells.filter(
      res => res?.name.toLowerCase().includes(text.toLowerCase())
    )
    this.totalItems=this.filteredspells.length;
  }

  pageClicked(page: number){
    this.onClick.emit(page);
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
    return this.filteredspells.slice(start,end);
  }

}
