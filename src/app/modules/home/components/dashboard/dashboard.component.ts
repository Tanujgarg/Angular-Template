import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { AddUser } from 'src/app/actions/user.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.dispatch(AddUser({ user: 'tanuj' }))
    this.store.select(state => state)
      .subscribe(users => console.log(users))

      this.store.dispatch(AddUser({ user: 'tanuj' }))
      this.store.dispatch(AddUser({ user: 'tanuj' }))
      this.store.dispatch(AddUser({ user: 'tanuj' }))
  }

}
