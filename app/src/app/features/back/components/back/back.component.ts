import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Iback } from '../../models/iback';
import { BackService } from '../../service/back.service';



@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit, OnDestroy {

  public backStyles: Iback[] = [];
  protected readonly clearSubscriptions$ = new Subject(); // only can read

  constructor(public backService: BackService) { }

 ngOnDestroy(): void {
    this.clearSubscriptions$.complete();
  }

  ngOnInit(): void {
    this.recoverBackStyle(); 
  }

  public recoverBackStyle() {
    return this.backService.getStyleBack().pipe(takeUntil(this.clearSubscriptions$), ).subscribe((data : any) => {
      this.backStyles = data;
    })
  }
}
