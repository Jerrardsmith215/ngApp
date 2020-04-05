import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostFetchService {
  private url: string = 'localhost:3000/'; 
  private http: HttpClient;
  constructor() { 

  }

  fetchPosts() {
    return this.http.get(this.url);
  }
}
