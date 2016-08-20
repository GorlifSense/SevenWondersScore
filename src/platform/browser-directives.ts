/*
 * These are globally available directives in any template
 */
// Angular 2
import { CompilerConfig } from '@angular/compiler';
// Angular 2 Router
import { ROUTER_DIRECTIVES } from '@angular/router';
// Angular 2 forms
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

// application_directives: directives that are global through out the application
export const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES,
  ...REACTIVE_FORM_DIRECTIVES
];

export const DIRECTIVES = [
  { provide: CompilerConfig, multi: true, useValue: APPLICATION_DIRECTIVES }
];
