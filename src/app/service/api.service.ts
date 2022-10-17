import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  url:string = environment.apiURL;


  // Fetch All Data
  getAllUserData() :Observable<any>{
    return this.http.get(`${this.url}`);
  }

  //Fetch Single Data
  getSingleUserData(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  //Post Data
  postUserData(data:any){
   return this.http.post(`${this.url}`,data);
  }

  // Update Data
  updateUserData(data:any){
   return this.http.put(`${this.url}/${data.id}`,data);
  }

  // Delete Data
  deleteUserData(id:any){
    return  this.http.delete(`${this.url}/${id}`);
  }

}
