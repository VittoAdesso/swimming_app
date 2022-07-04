import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { Icrol } from '../../models/icrol';
import { CrolService } from '../../services/crol.service';

@Component({
  selector: 'app-croll',
  templateUrl: './croll.component.html',
  styleUrls: ['./croll.component.scss']
})

export class CrollComponent implements OnInit, OnDestroy {

  public crolStyles: Icrol[] = [];
  protected readonly clearSubscriptions$ = new Subject(); // only can read
  
  constructor(public crolService: CrolService, 
  ) { }

  ngOnDestroy(): void {
    this.clearSubscriptions$.complete();
  }
  
  ngOnInit(): void {
    this.recoverCrolStyle(); 
  }

  public recoverCrolStyle() {
    return this.crolService.getStyleCrol().pipe(takeUntil(this.clearSubscriptions$), ).subscribe((data : any) => {
      this.crolStyles = data;
    })
  }
  
}




