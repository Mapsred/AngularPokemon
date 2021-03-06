import {Directive, Input, HostBinding} from "@angular/core";
/**
 * Created by maps_red on 20/12/16.
 */
@Directive({
  selector:'[layout]'
})
export class LayoutDirective{
  @Input() layout:string;
  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  get direction(){
    return (this.layout === 'column') ? 'column':'row';
  }
}
