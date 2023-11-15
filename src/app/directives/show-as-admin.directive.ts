import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

const fromToken = (token: any) => (role: string) => {
  const data: any = jwtDecode(token);
  return data?.roles.includes(role);
};

@Directive({
  selector: '[pmShowAsAdmin]',
  standalone: true,
})
export class ShowAsAdminDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
    const token = sessionStorage.getItem('pm_jwt');
    const hasClaim = fromToken(token);
    if (!!token && hasClaim('admin'))
      this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
