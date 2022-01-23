import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    constructor(private http: HttpClient) {}

    getLatestNews() {
        return this.http.get<any>(
            `https://api.samuelhinkhouse.com/latest-news`
        );
    }

    searchForNews(searchQuery: string, category: string) {
        return this.http.get<any>(
            `https://api.samuelhinkhouse.com/search-news?keywords=${searchQuery}&category=${category}`
        );
    }
}
