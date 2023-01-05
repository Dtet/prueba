import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FacultativoService } from 'src/app/services/facultativo.service';
import {MatPaginator} from '@angular/material/paginator';
import { Response } from 'src/app/models/infoApi.model';


const response: Response[] = [
  {
    API: 'string',
    Description: 'string',
    Link: 'string',
    Category: 'string',
    Cors: 'string'
}
];


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  displayedColumns: string[] = ['API', 'Description', 'Link', 'Category', 'Cors'];
  dataSource = new MatTableDataSource<Response>(response)

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
}
  

  constructor( private facultativoService: FacultativoService ) { }

  ngOnInit(): void {
    this.facultativoService.getListaFacultativo()
    .subscribe(resp => {
      console.log(resp.result.data.listado);
    });
  }


}


