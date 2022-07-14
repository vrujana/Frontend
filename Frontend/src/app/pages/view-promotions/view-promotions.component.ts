import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';


@Component({
  selector: 'app-view-promotions',
  templateUrl: './view-promotions.component.html',
  styleUrls: ['./prueba.css']
})
export class ViewPromotionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var data = [
      [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25",
          "$3,120"
      ],
      [
          "Garrett Winters",
          "Director",
          "Edinburgh",
          "8422",
          "2011/07/25",
          "$5,300"
      ]
  ]

    $('#products').DataTable({
      "columnDefs": [ 
        { "title": "Name", "targets": 0 },
        { "title": "Price", "targets": 1 },
        { "title": "Stock", "targets": 2 },
        { "title": "Price", "targets": 3 },
        { "title": "Stock", "targets": 4 },
        { "title": "Description", "targets": 3 }
      ],
      scrollY:        "300px",
      scrollX:        true,
      scrollCollapse: true,
      paging:         false,
      fixedColumns:{
        leftColumns: 2
   },
      
});
  }

  

}
