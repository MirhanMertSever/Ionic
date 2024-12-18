import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, IonAlert } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient, private alertController:AlertController) { }

  url = "https://reqres.in/api";
  
  login(veri:any) {
    return this.http.post(this.url + "/login", veri);
  }

  register(veri:any) {
    return this.http.post(this.url + "/register", veri);
  }

  getUsers() {
    return this.http.get(this.url + "/users");
  }

  async errorAlert(baslik:string, mesaj:string) {
    const alert = await this.alertController.create( {
      header: baslik,
      message: mesaj,
      buttons: ['Ok']
    });

    await alert.present();
  }
}
