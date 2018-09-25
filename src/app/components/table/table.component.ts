import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';


// Import custom components
import { ModalComponent } from './../../shared/components/modal/modal.component';
import { AlgoliaService } from '../../core/services/algolia.service';
import { Algolia } from '../../core/model/algolia.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, OnDestroy {

  rows: Algolia;
  loading = true;
  interval: any;

  constructor(private algoliaService: AlgoliaService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    // start interval when component is initialized
    this.interval = setInterval(() => {
      this.getData();
    }, 10000);
  }

  getData() {
    this.algoliaService.getAllData().subscribe(response => {
      this.loading = false;
      this.rows = response;
      this.rows.hits.reverse();
    }, (err) => {
      this.loading = false;
      alert('Unable to get data');
    });
  }

  openModel(row) {
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.data = row;
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}






