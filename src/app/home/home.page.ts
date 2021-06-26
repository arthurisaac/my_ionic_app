import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  posts = [];

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.recuperationDonnees();
  }

  async recuperationDonnees() {
    console.log('recupération des données');
    const url = 'https://jsonplaceholder.typicode.com/posts';
    await this.http.get<any>(url)
      .subscribe(
        res => {
          console.log(res);
          this.posts = res;
        },
        error => {
          console.error(error);
        }
      );
  }
}
