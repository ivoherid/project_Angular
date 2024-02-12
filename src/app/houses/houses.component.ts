import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { HousesService } from '../services/houses.service';
import { Houses } from '../interface/houses';
@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.css'
})
// export class HousesComponent implements OnInit{

//   public houseservice = inject(HousesService);
//   houses: any =[];


//   ngOnInit(): void {
//     this.loadHouses();
//   }


//   loadHouses(){
//     this.houseservice.getHouses().subscribe((houses:any)=>{
//       console.log("Fetched Successfully");
//       this.houses=houses;
//     });
//   }
// }

export class HousesComponent {
  houses: Houses[] = [];
  houseservice = inject(HousesService);

  constructor(){
    this.houseservice.getHouses().then((res:any)=>{
      this.houses = res;
    });
  }
}
