import axios from 'axios'
export const actions = {
    asyncReturnBook(context) {
        const table_books = context.state.table_books
        const set = new Set()
        for (let i = 0; i < table_books.length; i++) {
            axios
                .get(`http://localhost/returnbook?id=${table_books[i].id}`)
                .then((response) => {
                    if (response.data === 'success') {
                        set.add(i)
                    }
                })
        }
        context.commit('handleReturnBook', {
            set: set
        })
    },
    asyncRentBook(context) {
        const table_books = context.state.table_books
        if (table_books.length <= 0) return
        const set = new Set()
        for (let i = 0; i < table_books.length; i++) {
            axios
                .get(`http://localhost/rentbook?id=${table_books[i].id}`)
                .then((response) => {
                    if (response.data === 'success') {
                        set.add(i)
                    }
                })
        }
        context.commit('handleRentBook', {
            set: set
        })
    },
    ajaxGet(context) {
        const book_cur = context.state.book_cur
        const select_books = context.state.select_books
        for (let i = book_cur; i <= book_cur + 10; i++) {
            if (i >= 40) {
                break
            }
            axios
                .get(`http://localhost/getinfor?id=${i}`)
                .then((response) => {
                    const data = response.data
                    if (data === 'notFound') {
                        return
                    }
                    select_books.push({
                        id: data.id,
                        name: data.name,
                        author: data.author,
                        tag: data.tag,
                        intro: data.intro,
                        img_url: `http://localhost/getimg?id=${i}`,
                    })
                })
                .catch((reason) => {
                    console.log(reason)
                })
        }
        context.state.book_cur += 10
    }
}