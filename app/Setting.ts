export class Setting {
    showAvatar: string;
    curThemeId: number;

    constructor(showAvatar: string, curThemeId: number) {
        this.showAvatar = showAvatar;
        this.curThemeId = curThemeId;
    }
}