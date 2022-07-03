import { Injectable } from '@angular/core';
import { PRODUCT } from 'src/app/PRODUCT';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import{ Observable, of }from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GetproductService {
private apiurl='http://localhost:8080/api/productos'
  constructor(private http:HttpClient) { }
getproducts(): Observable <PRODUCT[]>{
return this.http.get <PRODUCT[]>(this.apiurl)

}
getespeci(id=''):Observable <PRODUCT>{
const x=this.http.get <PRODUCT>(this.apiurl+id)

  return x

  }
}

