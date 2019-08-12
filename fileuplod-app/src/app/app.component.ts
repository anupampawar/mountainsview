import { Component } from '@angular/core';
import { FileServiceService } from './file-service.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileuplod-app';
    msg : string;
    selectedFiles: FileList;
	currentFile: File;

    constructor(private fileService: FileServiceService) {}
	
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
  ngOnInit(){
	  this.fileService.listFiles().subscribe(response => {
		//this.selectedFiles.value = '';
     if (response instanceof HttpResponse) {
		 this.msg = ""+response.body;
        console.log(response.body);
      }	  
    });    
  }
  
  upload() {
    this.currentFile = this.selectedFiles.item(0);
    this.fileService.uploadFile(this.currentFile).subscribe(response => {
		//this.selectedFiles.value = '';
     if (response instanceof HttpResponse) {
		 this.msg = ""+response.body;
        console.log(response.body);
      }	  
    });    
  }
}
