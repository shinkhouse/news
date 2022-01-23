import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'news',
                loadChildren: () =>
                    import('../news/news.module').then((m) => m.NewsPageModule),
            },
            {
                path: 'bookmarks',
                loadChildren: () =>
                    import('../bookmarks/bookmarks.module').then((m) => m.BookmarksPageModule),
            },
            {
                path: 'settings',
                loadChildren: () =>
                    import('../settings/settings.module').then((m) => m.SettingsPageModule),
            },
            {
                path: 'search',
                loadChildren: () =>
                    import('../search/search.module').then((m) => m.SearchPageModule),
            },
            {
                path: '',
                redirectTo: '/tabs/news',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/news',
        pathMatch: 'full',
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
