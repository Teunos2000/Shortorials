export class Shortorial {

    //Attributes
    url
    keywords
    title
    description
    length
    date
    thumbnail

    constructor(url, keywords, title, description, length, date, thumbnail) {
        this.url = url;
        this.keywords = keywords;
        this.title = title;
        this.description = description;
        this.length = length;
        this.date = date;
        this.thumbnail = thumbnail;
    }
}