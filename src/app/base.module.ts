/**
 * Created by maps_red on 20/12/16.
 */
import {FlexDirective} from "./directive/FlexDirective";
import {LayoutDirective} from "./directive/LayoutDirective";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [FlexDirective, LayoutDirective],
  exports: [FlexDirective, LayoutDirective]

})

export class BaseModule {
}
