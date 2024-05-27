import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/post.service';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {
    post!: Post;
    constructor(private route: ActivatedRoute, private PostSvc: PostService) {}

    ngOnInit() {
        this.route.paramMap.subscribe((params: any) => {
            const postId = params.get('id');
            this.post = this.PostSvc.getPostById(postId);
        });
    }
}
