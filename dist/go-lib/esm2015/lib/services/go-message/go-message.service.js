/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export class GoMessageService {
    /**
     * @param {?} toastr
     */
    constructor(toastr) {
        this.toastr = toastr;
    }
    /**
     * Show a success message.
     * @param {?=} msg
     * @param {?=} title
     * @return {?}
     */
    sendMessage(msg = '', title = 'Success!') {
        this.toastr.success(msg, title);
    }
    /**
     * @param {?=} msg
     * @param {?=} title
     * @return {?}
     */
    logError(msg = '', title = 'Something went wrong.') {
        this.toastr.error(msg, title);
    }
}
GoMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoMessageService.ctorParameters = () => [
    { type: ToastrService }
];
/** @nocollapse */ GoMessageService.ngInjectableDef = i0.defineInjectable({ factory: function GoMessageService_Factory() { return new GoMessageService(i0.inject(i1.ToastrService)); }, token: GoMessageService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoMessageService.prototype.toastr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ28tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9nby1tZXNzYWdlL2dvLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixZQUNVLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFDM0IsQ0FBQzs7Ozs7OztJQU9FLFdBQVcsQ0FBQyxNQUFjLEVBQUUsRUFBRSxRQUFnQixVQUFVO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFTSxRQUFRLENBQUMsTUFBYyxFQUFFLEVBQUUsUUFBZ0IsdUJBQXVCO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUFwQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsYUFBYTs7Ozs7Ozs7SUFRbEIsa0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJ25neC10b2FzdHInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIEdvTWVzc2FnZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRvYXN0cjogVG9hc3RyU2VydmljZVxuICApIHsgfVxuXG4gIC8qKlxuICAgKiBTaG93IGEgc3VjY2VzcyBtZXNzYWdlLlxuICAgKiBAcGFyYW0gbXNnIFxuICAgKiBAcGFyYW0gdGl0bGUgXG4gICAqL1xuICBwdWJsaWMgc2VuZE1lc3NhZ2UobXNnOiBzdHJpbmcgPSAnJywgdGl0bGU6IHN0cmluZyA9ICdTdWNjZXNzIScpIHtcbiAgICB0aGlzLnRvYXN0ci5zdWNjZXNzKG1zZywgdGl0bGUpO1xuICB9XG5cbiAgcHVibGljIGxvZ0Vycm9yKG1zZzogc3RyaW5nID0gJycsIHRpdGxlOiBzdHJpbmcgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcuJykge1xuICAgIHRoaXMudG9hc3RyLmVycm9yKG1zZywgdGl0bGUpO1xuICB9XG59XG4iXX0=