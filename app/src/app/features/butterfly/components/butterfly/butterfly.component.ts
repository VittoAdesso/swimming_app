import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Ibutterfly } from '../../models/ibutterfly';
import { ButterflyService } from '../../service/butterfly.service';


@Component({
  selector: 'app-butterfly',
  templateUrl: './butterfly.component.html',
  styleUrls: ['./butterfly.component.scss']
})
export class ButterflyComponent implements OnInit {

  public butterflyStyles: Ibutterfly[] = [];
  protected readonly clearSubscriptions$ = new Subject(); // only can read

  constructor(public butterflyService: ButterflyService) { }

  ngOnInit(): void {
    this.recoverButterflyStyle(); 
  }
  public recoverButterflyStyle() {
    return this.butterflyService.getStyleButterfly().pipe(takeUntil(this.clearSubscriptions$), ).subscribe((data : any) => {
      this.butterflyStyles = data;
    })
  }
}
