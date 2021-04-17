import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeResourceUrl'})
export class SafeUrlPipe implements PipeTransform{
  constructor(private sanitizer:DomSanitizer){}
  isUrlValid(userInput) {
    const res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g);
    return res != null;
  }
  transform(url) {
    const checkUrl = this.isUrlValid(url);
    if (!checkUrl) return;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
