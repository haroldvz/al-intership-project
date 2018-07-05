import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit-text'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limite: string): string {
    const limit = parseInt(limite);
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}