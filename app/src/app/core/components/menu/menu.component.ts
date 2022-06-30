import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public authService: AuthService) { }  
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  public logout() {
    this.authService.doLogout();
  }
}
