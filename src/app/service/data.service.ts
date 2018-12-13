import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getUser() {
    console.log('getUser')
    return this.http.get('http://localhost:8080/getUser');
  }

  getTemplate(name) {
    return this.http.get('http://localhost:8080/template?name=' + name);
  }

  getTemplateList() {
    return this.http.get('http://localhost:8080/templateList');
  }

  getTerm(name) {
    return this.http.get(encodeURI('http://localhost:8080/term?term=' + name));
  }

  getAllTerms() {
    return this.http.get(encodeURI('http://localhost:8080/allterms'));
  }
}
