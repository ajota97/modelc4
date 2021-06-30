import { Injectable , Output, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoordServiceService {
  @Output() sendCoord:EventEmitter<any>= new EventEmitter();

  constructor() { }
}
