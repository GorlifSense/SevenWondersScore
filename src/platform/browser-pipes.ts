/*
 * These are globally available pipes in any template
 */

import { CompilerConfig } from '@angular/compiler';

// application_pipes: pipes that are global through out the application
export const APPLICATION_PIPES = [

];

export const PIPES = [
  { provide: CompilerConfig, multi: true, useValue: APPLICATION_PIPES }
];
