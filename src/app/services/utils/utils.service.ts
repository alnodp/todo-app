import { Injectable } from '@angular/core';

const MONTHS =
  ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getMonthNameByMonthNumber(monthNumber) {
    return MONTHS[monthNumber];
  }

  getHeaderFormatDate() {
    const currentDate = new Date();
    const dayName = currentDate.toLocaleTimeString('es-US', { weekday: 'long'}).split(' ')[0];
    const dayNumber = currentDate.getDate();
    const monthName = this.getMonthNameByMonthNumber(currentDate.getMonth());

    return `${dayName}, ${dayNumber} de ${monthName}`;
  }
}
