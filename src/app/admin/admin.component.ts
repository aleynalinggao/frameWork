import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
    isCollapsed = false;
    triggerTemplate = null;

    @ViewChild('trigger') customTrigger: TemplateRef<void>;
    /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  constructor() { }

  ngOnInit() {
  }

}
