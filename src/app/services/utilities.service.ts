import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  public alertError(error){
    return Swal.fire({
      icon: 'error',
      title: 'Algo va mal',
      text: 'error: ' + error,
    })
  }

  public alertSucces(msj){
    return Swal.fire({
      icon: 'success',
      title: 'Todo Perfecto',
      text: msj,
    })
  }

}
