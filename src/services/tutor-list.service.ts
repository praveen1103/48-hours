import { Injectable } from '@angular/core';
import { Tutor } from './models/tutor.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TutorListService {
    constructor(){ }

    getTutors(): Observable<Tutor[]> {
        let tutors: Tutor[] = [
            {
                id: "1",
                name: 'Tutor 1',
                subjects: [
                    {
                        id: "1",
                        name: 'Angular'
                    }
                ]
            },
            {
                id: "2",
                name: 'Tutor 2',
                subjects: [
                    {
                        id: "2",
                        name: 'ASP.NET'
                    }
                ]
            }
        ]; 
        return of(tutors);
    }
}