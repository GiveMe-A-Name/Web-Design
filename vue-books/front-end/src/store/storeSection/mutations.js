export const mutations = {
    handleTableAdd(state, payload) {
        const index = payload.index
        state.table_books.push(state.select_books[index])
        state.select_books.splice(index, 1)
    },
    handleTableDelete(state, payload) {
        const index = payload.index
        state.select_books.push(state.table_books[index])
        state.table_books.splice(index, 1)
    },
    handleSelectAdd(state, payload) {
        state.table_books.push(payload.book)
    },
    handleReturnBook(state, payload) {
        const table_books = state.table_books
        const set = payload.set
        state.table_books = table_books.filter((_, index) => {
            return set.has(index)
        })
    },
    handleRentBook(state, payload) {
        const table_books = state.table_books
        const set = payload.set
        state.table_books = table_books.filter((_, index) => {
            return set.has(index)
        })
    }
}