import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User;
  errorMessage: string;

  constructor(public http: HttpClient, public dataService: DataService, private router: Router) {
    this.newUser = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json', 'cache-control': 'no-cache'})};
    const ob = this.http.post<User>('http://localhost:8080/registerUser', this.newUser, httpOptions);
    ob.subscribe(d => {
      console.log('registration result:' + d['message']);
      if (d['message'] === 'Registration complete') {
        this.router.navigate(['/login']);
      } else {
        this.errorMessage = d['message'];
      }
    });

    console.log('Submitted:' + this.newUser);
  }
}
