import { Directive, Renderer2 , ElementRef } from '@angular/core';

@Directive({
  selector: '[ngWSelected]'
})
export class SelectedDirective {

  constructor(private renderer: Renderer2,
              private elem: ElementRef) {
    this.renderer.listen(this.elem.nativeElement, 'focus',
    (event) => {
      event.target.select();
    });
   }

}
