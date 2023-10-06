import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedState } from 'src/app/store/shared.reducers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authState: any;
  constructor(private store: Store<SharedState>) { }
  ngOnInit(): void {
    this.store
      .select((i) => i.auth)
      .subscribe((authState) => {
        this.authState = authState;
      });
  }
}