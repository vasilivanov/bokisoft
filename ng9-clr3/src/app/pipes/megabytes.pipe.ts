import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'megabytes'
})
export class MegabytesPipe implements PipeTransform {

  transform(valueInBytes: any, ...args: unknown[]): string {
    console.log('bytes pipe transforming');
    return (valueInBytes / (1024*1024)).toFixed(2).toString() + ' MB';
  }
}
