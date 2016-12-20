import {Directive, Input, HostBinding} from "@angular/core";
/**
 * Created by maps_red on 20/12/16.
 */
@Directive({
  selector:'[flex]'
})
export class FlexDirective{
  @Input() shrink:number = 1;
  @Input() grow:number = 1;
  @Input() flex:string;

  @HostBinding('style.flex')
  get style(){
    return `${this.grow} ${this.shrink} ${this.flex === '' ? '0':this.flex}%`;
  }
}
