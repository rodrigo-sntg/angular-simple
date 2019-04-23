import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  teste:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  getTeste() {
    this.teste = [];
    this.rest.getTeste().subscribe((data: {}) => {
      console.log(data);
      this.teste = data;
    });
  }

  ngOnInit() {
  }

}
