import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countPipe'
})
export class CountPipePipe implements PipeTransform {

  transform(value: any): any {
    let today:any = new Date();
    var dateDifference =Math.abs(value-today)
    const secondsInADay= 86400;
    var dateDifferenceSeconds=dateDifference*0.001;
    var days = Math.round(dateDifferenceSeconds/secondsInADay);
    dateDifferenceSeconds -=(days*secondsInADay);
    var hours = Math.round(dateDifferenceSeconds/(60*24)) ;
    dateDifferenceSeconds -=(hours*(60*24));
    var minutes = Math.round(dateDifferenceSeconds/60) ;
    var seconds = Math.round(dateDifferenceSeconds-(minutes*60)) ;


    if (days>0) {
      return days + " days ";
    }
    if (hours>0) {
      return hours + " hours ";
    }
    if (minutes>0) {
      return minutes + " minutes ";
    }
    return seconds + " seconds ";
  }

}
