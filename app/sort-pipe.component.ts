import { Pipe, PipeTransform } from "angular2/core";
import {Todo} from './todo';
import {isBlank} from 'angular2/src/facade/lang';


@Pipe({
  name: "sort",
  pure: false
})
export class TodosSortPipe implements PipeTransform {
    transform(array: Todo[], args: any): Todo[] {
        console.log("calling pipe");
        if (isBlank(array)) return array;
        array.sort((a, b) => {
        if (a.completed < b.completed) {
            return -1;
        } else if (a.completed > b.completed) {
            return 1;
        } else {
            return 0;
        }
    });
    return array;
}
}