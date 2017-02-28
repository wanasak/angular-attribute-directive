import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {

    @Input('highlight') highlightColor: string;
    @Input() defaultColor: string;

    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onmouseenter() {
        this.highlight(this.highlightColor || this.defaultColor);
    }

    @HostListener('mouseleave') onmouseleave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

}