import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/post.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    post!: Post;
    posts: Post[] = [];
    related: Post[] = [];

    constructor(private PostSvc: PostService) {}

    async ngOnInit() {
        this.post = await this.PostSvc.getTopPost();
        this.related = this.PostSvc.getRelated(4);
    }
}
