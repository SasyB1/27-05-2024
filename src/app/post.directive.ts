import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[colorPost]',
})
export class PostDirective {
    constructor(private ref: ElementRef) {}
    ngOnInit() {
        this.ref.nativeElement.style.backgroundColor = this.getRandomColor();
    }
    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
