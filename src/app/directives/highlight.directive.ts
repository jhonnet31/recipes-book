import { Directive, OnInit, ElementRef, Renderer2, HostListener, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private elRef:ElementRef, private render:Renderer2) { }

  ngOnInit(): void {

    
  }

  @HostListener('mouseenter') over(eventData: Event){
    this.render.setStyle(this.elRef.nativeElement, 'background-color','gray', RendererStyleFlags2.DashCase);
  }

  @HostListener('mouseleave') leave(eventDate:Event){
    this.render.setStyle(this.elRef.nativeElement,'background-color','transparent', RendererStyleFlags2.DashCase);
  }

}
