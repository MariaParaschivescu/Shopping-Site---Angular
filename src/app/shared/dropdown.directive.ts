import { Directive,
         ElementRef, 
         Renderer2,
         HostListener,
         HostBinding
         } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})

export class DropDownDirective{

    clicked = false;
    //@HostBinding ('class.open') isOpen = false;

    
     constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

     
    @HostListener('click') toggleOpen(eventData: Event){
        this.clicked = !this.clicked;
        this.clicked ? this.renderer.addClass(this.elemRef.nativeElement, 'open') : 
                       this.renderer.removeClass(this.elemRef.nativeElement, 'open');
            
        
    }
}