import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/post.service';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
    posts: Post[] = [];
    constructor(private PostSvc: PostService) {}

    async ngOnInit() {
        this.posts = await this.PostSvc.getInactivePosts();
    }
}
