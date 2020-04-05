import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostFetchService } from '../post-fetch.service';

let store = [];

@Component({
    selector: 'news-table',
    templateUrl: 'newstable.component.html',
    styleUrls: ['newstable.component.scss']
})

export class NewsTableComponent implements OnInit {
    public data = [];
    constructor(private api: PostFetchService) { }

    ngOnInit() { 
        this.api.fetchPosts()
            .subscribe(posts => {
                this.data = posts;
                store = posts;
            });
    }

    displayedColumns: string[] = ['id', 'title', 'status', 'slug', 'date'];
    dataSource = this.data;
}