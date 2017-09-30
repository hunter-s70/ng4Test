/**
 * Created by hunter_s70 on 25.09.2017.
 */
import {Input, Component, Inject} from '@angular/core';
import {MdDialog, MD_DIALOG_DATA} from '@angular/material';

/**
 * @title Injecting data when opening a dialog
 */
@Component({
    selector: 'dialog-data-example',
    templateUrl: './app/UsersCmp/tmp/dialog-data-example.html',
})
export class DialogDataExample {
    @Input() itemData: any;

    constructor(public dialog: MdDialog) {}

    openDialog(itemData: any) {
        this.dialog.open(DialogDataExampleDialog, {
            data: itemData
        });
    }
}

@Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: './app/UsersCmp/tmp/dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
    constructor(@Inject(MD_DIALOG_DATA) public data: any) {}
}