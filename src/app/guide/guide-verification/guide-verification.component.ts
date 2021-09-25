import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-guide-verification',
  templateUrl: './guide-verification.component.html',
  styleUrls: ['./guide-verification.component.scss'],
})
export class GuideVerificationComponent implements OnInit {
  @ViewChild('fileLoader1', { static: true })
  fileLoader1: ElementRef;
  @ViewChild('fileLoader2', { static: true })
  fileLoader2: ElementRef;

  fileToUpload: any;
  doc1: string = '';
  doc2: string = '';
  constructor(private cd: ChangeDetectorRef, private snackbar: MatSnackBar) {}
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  pickFile1() {
    (<any>this.fileLoader1.nativeElement).click();
    // this._elementRef.nativeElement.querySelector('input').click();
  }
  pickFile2() {
    (<any>this.fileLoader2.nativeElement).click();
    // this._elementRef.nativeElement.querySelector('input').click();
  }

  deleteImage1() {
    this.doc1 = '';
    setTimeout(() => {
      this.cd.markForCheck();
    }, 300);
  }
  deleteImage2() {
    this.doc2 = '';
    setTimeout(() => {
      this.cd.markForCheck();
    }, 300);
  }
  ngOnInit(): void {
    this.snackbar.open(
      'All our guides are required to have their identity verified before being able to create and lead trips. Please upload two pieces of official identification for verification. Official identification can include Passport,National ID, and Health Cards.',
      'close',
      {
        duration: 60000,
        panelClass: ['success-snackbar'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      }
    );
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
  onSelectFile2(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      console.log(event.target.files);
      this.fileToUpload = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.doc2 = event.target.result;
        setTimeout(() => {
          this.cd.markForCheck();
        }, 300);
      };
    }
  }
}
