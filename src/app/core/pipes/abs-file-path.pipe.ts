import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'absFilePath',
})
export class AbsFilePathPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    const baseUrl: string = 'https://ytc.beginner2expert.com/angular14/api/';
    const relativePath: String = value;
    const absPath: string = baseUrl + relativePath;
    return absPath;
  }
}
