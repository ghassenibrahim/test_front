import { Injectable } from '@angular/core';
import { inherits } from 'util';
import { McBreadcrumbsResolver } from 'ngx-breadcrumbs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class OurServicesResolver extends McBreadcrumbsResolver {

  constructor() {
    super();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const category = route.params.category;
    const service = route.params.service;
    const myCrumbs = route.url.map(r => {
      return {
        text: 'ourServices.' + r.path,
        path: r.path
      }

    })
    myCrumbs[0].path = "our-services"
    myCrumbs[1].path = "our-services/" + category
    if (myCrumbs[2]) {
      myCrumbs[2].path = "our-services/" + category + "/" + service
    }
    return myCrumbs;
  }
}