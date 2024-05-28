import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/post.service';

@Component({
    selector: 'app-single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent {
    posts: Post[] = [];

    constructor(private PostSvc: PostService) {}

    @Input() post!: Post;
    edit: Boolean = false;
    toggleEdit() {
        this.edit = !this.edit;
    }
}
