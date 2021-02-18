import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ContactService {

    constructor(
        private http: HttpClient
    ) { }

    sendContactForm(body) {
        return this.http.post(environment.contactAPI, body, {
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}