import { Directive, OnInit, ElementRef, Renderer2, HostListener, RendererStyleFlags2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private elRef:ElementRef, private render:Renderer2) { }

  @Input() highlightColor:string="gray";
  @Input() defaultColor:string="transparent";
  @HostBinding("style.backgroundColor") backgroundColor:string;


  ngOnInit(): void {
    this.backgroundColor=this.defaultColor;
    
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color','gray', RendererStyleFlags2.DashCase);
    console.log(eventData);
    
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') leave(eventDate:Event){
    // this.render.setStyle(this.elRef.nativeElement,'background-color','transparent', RendererStyleFlags2.DashCase);
    this.backgroundColor=this.defaultColor ;
  }

}
