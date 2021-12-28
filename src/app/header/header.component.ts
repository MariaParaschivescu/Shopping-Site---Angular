import { Component, Output, EventEmitter, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl : './header.component.html'
})

export class HeaderComponent{
    @Output() feature = new EventEmitter<string>();
    collapsed = true;


    onSelect(item: string){
        this.feature.emit(item);
    }

}