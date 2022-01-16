import { ElementSchemaRegistry } from '@angular/compiler/src/schema/element_schema_registry';
import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[AlternateIf]',
})
export class AlternateIf implements OnInit {
  @Input() AlternateIf: boolean;

  ngOnInit() {
    if (this.AlternateIf) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else this.vcRef.clear();
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
