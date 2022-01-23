import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../AuthApi/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fasearch = faSearch;
  bars= faBars;

  constructor(public _auth:AuthService) { }

  ngOnInit(): void {
  }

}
