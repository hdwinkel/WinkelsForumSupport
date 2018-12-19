import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  angularVersion: string;
  constructor() { }

  ngOnInit() {
    this.angularVersion = VERSION.full;
  }

}
