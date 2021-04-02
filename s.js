// Single Responsibility Prunciple

class News {
    constructor(title, text){
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }
}

class NewPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
        <div class="news">
            <h1>${this.news.title}</h1>
            <p>${this.news.text}</p>
        </div>
        `
    }
}

const printer = new NewPrinter(
    new News(title: 'Коронавірус', text: 'Новий спалах')
)

console.log(printer.html())