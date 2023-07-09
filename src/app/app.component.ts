import { Component,OnInit } from '@angular/core';
import { DarkModeService } from './dark-mode.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'foodorder';
  // isLoggedIn:boolean=false;
  constructor(private darkModeService: DarkModeService){}

  ngOnInit(): void{
    this.darkModeService.load();
  }

  toggleDarkMode(): void{
    this.darkModeService.toggleDarkMode();
  }

}
