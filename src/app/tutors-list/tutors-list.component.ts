import { Component, OnInit } from '@angular/core';
import { Tutor } from 'src/services/models/tutor.model';
import { TutorListService } from 'src/services/tutor-list.service';

@Component({
  selector: 'app-tutors-list',
  templateUrl: './tutors-list.component.html',
  styleUrls: ['./tutors-list.component.scss']
})
export class TutorsListComponent implements OnInit {

  tutors: Tutor[];

  constructor(private service: TutorListService) { }

  ngOnInit(): void {
    this.service.getTutors().subscribe((response: Tutor[]) => {
      this.tutors = response;
    });
  }

}
