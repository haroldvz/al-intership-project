import { Pipe, PipeTransform } from '@angular/core';


/**
 *
 * Pipe to convert api data time to readeble time
 * @export
 * @class DurationTimePipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'durationTime'
})
export class DurationTimePipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor( value / 60);
    const minutes = value % 60;
    return `${hours}h ${minutes}m`;
 }
}