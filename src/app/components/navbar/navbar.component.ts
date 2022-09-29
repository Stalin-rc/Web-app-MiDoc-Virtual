import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() logeado = false;
  constructor(private activated: ActivatedRoute) { }
  id!: number;
  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id'];
    if (this.id != undefined) {
      this.logeado = true;
    }
  }

}
