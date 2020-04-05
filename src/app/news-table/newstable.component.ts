import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostFetchService } from '../post-fetch.service';

@Component({
    selector: 'news-table',
    templateUrl: 'newstable.component.html',
    styleUrls: ['newstable.component.scss']
})

export class NewsTableComponent implements OnInit {
    public data = [];
    public openDialog = (el) => {
        alert('Link: ' + el.link + '\n\n Content: ' + el.content.rendered);
    }
    constructor(private api: PostFetchService) { }

    ngOnInit() { 
        this.api.fetchPosts()
            .subscribe(posts => {
                this.data = posts;
            });
    }

    displayedColumns: string[] = ['id', 'title', 'status', 'slug', 'date'];
    dataSource = this.data;
}