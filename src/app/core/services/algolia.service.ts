import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Algolia } from '../model/algolia.model';


@Injectable()
export class AlgoliaService {

  apiUrl = 'https://hn.algolia.com/api/v1/search_by_date';

  constructor(private http: HttpClient) { }

  getAllData(): Observable<Algolia> {
    const httpParams = new HttpParams();
    const params = httpParams.set('tags', 'story');
    return this.http.get<Algolia>(this.apiUrl, { params });
  }

}





