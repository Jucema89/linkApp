export class Link {
    public id: string;
    public createdAt: Date;
    public url: string;
    public name: string;

    constructor( texto: string) {
        this.id = texto,
        this.createdAt = new Date();
        this.url = texto;
        this.name = texto;
    }
}