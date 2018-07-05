import { Pipe, PipeTransform } from '@angular/core';

/**
 *
 *
 * @export
 * @class TruncatePipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'limitText'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limite: string): string {
    const limit = parseInt(limite);
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}