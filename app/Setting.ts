export class Setting {
    id: number;
    showAvatar: boolean;
    curThemeId: number;

    constructor(id: number, showAvatar: boolean, curThemeId: number) {
        this.id = id;
        this.showAvatar = showAvatar;
        this.curThemeId = curThemeId;
    }
}