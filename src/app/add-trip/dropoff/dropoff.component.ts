import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dropoff',
  templateUrl: './dropoff.component.html',
  styleUrls: ['./dropoff.component.scss'],
})
export class DropoffComponent implements OnInit {
  @ViewChild('fileLoader1', { static: true })
  fileLoader1: ElementRef;

  fileToUpload: any;
  doc1: string = '';
  constructor(private cd: ChangeDetectorRef) {}
  pickFile1() {
    (<any>this.fileLoader1.nativeElement).click();
    // this._elementRef.nativeElement.querySelector('input').click();
  }
  deleteImage1() {
    this.doc1 = '';
    setTimeout(() => {
      this.cd.markForCheck();
    }, 300);
  }
  onSelectFile1(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      console.log(event.target.files);
      this.fileToUpload = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.doc1 = event.target.result;
        setTimeout(() => {
          this.cd.markForCheck();
        }, 300);
      };
    }
  }
  ngOnInit(): void {}
}
