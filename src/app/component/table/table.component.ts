import { Component, OnInit } from '@angular/core';
import { RequestApiService } from '../../globalService/request-api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
dataSet: any;
  constructor(private http: RequestApiService) { }
  allChecked = false;
  indeterminate = false;
  displayData = [];
  ngOnInit() {
        this.http.postApi('usr',{tableNo: 1}).subscribe((data) => {
            this.dataSet = data['data'];
            console.log(data);
        })
  }
  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; disabled: boolean; }>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

}
