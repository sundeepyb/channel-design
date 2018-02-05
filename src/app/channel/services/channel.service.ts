import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChannelService {

    constructor(public http: HttpClient) { }

    getData(): Observable<any> {
        return this.http.get('/api/channels')
            .map((data) => {
                return data;
            });
    }

}
