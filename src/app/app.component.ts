import { Component } from '@angular/core';

import { PdfService } from './services/pdf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testePDF';
  
  constructor(private pdfService: PdfService) { }

  ngOnInit(): void {
    this.pdfService.createPdf();
  }
}
