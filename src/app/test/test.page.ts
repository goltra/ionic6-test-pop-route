import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(public navCtrl: NavController, public router: Router) { }

  ngOnInit() {
  }
  salir(){
    this.router.navigate(['/']);
  }
  salirPop(){
    this.navCtrl.pop()
  }

}
