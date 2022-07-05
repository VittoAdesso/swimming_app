import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Ifrog } from '../../models/ifrog';
import { FrogService } from '../../service/frog.service';

@Component({
  selector: 'app-frog',
  templateUrl: './frog.component.html',
  styleUrls: ['./frog.component.scss']
})
export class FrogComponent implements OnInit, OnDestroy {

  public frogStyles: Ifrog[] = [];
  protected readonly clearSubscriptions$ = new Subject(); // only can read

  constructor(public frogService: FrogService) { /* empty */ }

  ngOnInit(): void {
    this.recoverFrogStyle();
  }

  public recoverFrogStyle() {
    return this.frogService.getStyleFrog().pipe(takeUntil(this.clearSubscriptions$), ).subscribe((data : any) => {
      this.frogStyles = data;
    })
  }

  ngOnDestroy(): void {
    this.clearSubscriptions$.complete();
  }

}
