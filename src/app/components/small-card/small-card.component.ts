import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

@Input()
  photoCover: string="https://sobresagas.com.br/wp-content/uploads/2020/12/Disney.jpg"
@Input()
  cardTitle: string="NOVA SÉRIE ANUNCIADA!"

  constructor() { }

  ngOnInit(): void {
  }

}
