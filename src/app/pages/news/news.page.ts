import { Component } from '@angular/core';
import { NewsService } from '../../core/services/news.service';

@Component({
    selector: 'app-news',
    templateUrl: 'news.page.html',
    styleUrls: ['news.page.scss'],
})
export class NewsPage {
    public topNews: any;
    constructor(private newsService: NewsService) {
      this.getTopStories();
    }

    getTopStories() {
        this.newsService.getLatestNews().subscribe((res) => {
            this.topNews = res;
        });
    }
}
