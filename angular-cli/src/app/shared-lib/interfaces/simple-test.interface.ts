import {InjectionToken} from "@angular/core";

export const SIMPLE_TEXT_SERVICE_TOKEN = new InjectionToken<SimpleTextService>("SimpleTextService");

export interface SimpleTextService {
  getText(): string;
}
