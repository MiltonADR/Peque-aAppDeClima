import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../service/clima.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  city = '';
  clima: any;

  constructor(private climaService: ClimaService) {}

  ngOnInit() {
    /* this.climaService.getApi(this.city).subscribe((data) => data);
    this.climaService
      .getApi(this.city)
      .subscribe((data) => (this.clima = data));*/
  }

  redonderarNumero(numero) {
    return Math.round(numero);
  }

  traerDatos() {
    this.climaService.getApi(this.city).subscribe((data) => data);
    this.climaService
      .getApi(this.city)
      .subscribe((data) => (this.clima = data));
  }
}
