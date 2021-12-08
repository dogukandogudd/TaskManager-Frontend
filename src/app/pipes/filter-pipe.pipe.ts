import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Task[], filterText: string): Task[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((t:Task)=>t.taskTitle.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}
