import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(largeString: string, lengthToTruncate: number): string {
        if (largeString.length > lengthToTruncate) {
            return largeString.substring(0, lengthToTruncate) + '...';
        } else {
            return largeString;
    }
}
}
