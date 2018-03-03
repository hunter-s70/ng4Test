import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SettingsService {
    private subject = new Subject<any>();

    sendSetting(message: any) {
        console.log(message);
        this.subject.next(message);
    }

    catchSetting(): Observable<any> {
        return this.subject.asObservable();
    }
}