import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/services/observables/count.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent implements OnInit {
  count: number = 1;

  constructor(private countService: CountService) {}

  ngOnInit(): void {
    this.countService.getCount().subscribe((countValue: number) => {
      this.count = countValue;
    });
  }

  minus() {
    this.countService.setCount(this.count - 1);
  }

  plus() {
    this.countService.setCount(this.count + 1);
  }
}
