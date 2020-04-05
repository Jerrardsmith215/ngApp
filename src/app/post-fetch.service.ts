import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IArticle {
  id: string;
  slug: string;
  status: string;
  title: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})

export class PostFetchService {
  private url: string = 'http://localhost:3000/'; 
  constructor( private http: HttpClient ) {}

  fetchPosts(): Observable<IArticle[]>{
    return this.http.get<IArticle[]>(this.url);
  }
}
