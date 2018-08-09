import { Component, OnInit } from '@angular/core';
import {Inject, Injectable} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

 
  constructor(private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data : any, private router: Router) {

  }

  public closeDialog(){
    this.dialogRef.close();
    this.router.navigate(['login']);

  }

  ngOnInit() {
  }

}
