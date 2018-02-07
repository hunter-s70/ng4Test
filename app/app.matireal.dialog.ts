/**
 * Created by hunter_s70 on 25.09.2017.
 */
import {Input, Component, Inject, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Item} from './app.component';

/**
 * @title Injecting data when opening a dialog
 */
@Component({
    selector: 'dialog-data-example',
    templateUrl: './app/components/UsersCmp/tmp/dialog-data-example.html',
})
export class DialogDataExample {
    @Output() onChanged = new EventEmitter<Item[]>();
    @Input() itemData: any;
    _initData: any;

    constructor(public dialog: MatDialog) {}

    openDialog() {
        // create new object to protect live input change
        this._initData = Object.create(this.itemData);

        const dialogRef = this.dialog.open(DialogDataExampleDialog, {
            width: '600px',
            disableClose: true,
            data: this._initData
        });

        dialogRef.beforeClose().subscribe(() => {
            // emit refresh event when save Item
            this.onChanged.emit(this._initData);
        });
    }
}

@Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: './app/components/UsersCmp/tmp/dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
    constructor(
        public dialogRef: MatDialogRef<DialogDataExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

    saveItem() {
        this.dialogRef.close();
    }
}