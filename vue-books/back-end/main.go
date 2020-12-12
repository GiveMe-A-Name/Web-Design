package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

//DB 数据库obj
var DB *sql.DB

func init() {
	db, err := sql.Open("mysql", "username:password@tcp(localhost:3306)/mywebsql")
	if err != nil {
		fmt.Println(err)
		return
	}
	DB = db
}

func getimg(w http.ResponseWriter, r *http.Request) {
	id := r.FormValue("id")
	data := []byte{}
	row := DB.QueryRow("select book_pic from mybooks where book_id =?", id)
	err := row.Scan(&data)
	if err != nil {
		fmt.Println(err)
		return
	}
	w.Write(data)
}

//Book 存储图书信息
type Book struct {
	BookID     int    `db:"book_id" json:"id"`
	BookName   string `db:"book_name" json:"name"`
	BookAuthor string `db:"book_author" json:"author"`
	BookInfor  string `db:"book_intro" json:"intro"`
	BookTag    string `db:"book_tag" json:"tag"`
}

func getinfor(w http.ResponseWriter, r *http.Request) {
	id := r.FormValue("id")
	var book Book
	var number int
	row := DB.QueryRow("select book_id,book_name,book_author,book_intro,book_tag,Book_number from mybooks where book_id=?", id)
	err := row.Scan(&book.BookID, &book.BookName, &book.BookAuthor, &book.BookInfor, &book.BookTag, &number)
	if err != nil {
		fmt.Println(err)
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	if number <= 0 {
		w.Write([]byte("notFound"))
		return
	}
	w.Header().Set("content-type", "application/json")
	jsonData, err := json.Marshal(&book)
	if err != nil {
		fmt.Println(err)
		return
	}
	w.Write(jsonData)
}

func rentBook(w http.ResponseWriter, r *http.Request) {
	id := r.FormValue("id")
	_, err := DB.Exec("update mybooks set book_number=book_number-1 where book_id=?", id)
	if err != nil {
		fmt.Println(err)
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write([]byte("success"))
}

func returnBook(w http.ResponseWriter, r *http.Request) {
	id := r.FormValue("id")
	_, err := DB.Exec("update mybooks set book_number=book_number+1 where book_id=?", id)
	if err != nil {
		fmt.Println(err)
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write([]byte("success"))
}

func main() {
	http.HandleFunc("/getimg", getimg)
	http.HandleFunc("/getinfor", getinfor)
	http.HandleFunc("/rentbook", rentBook)
	http.HandleFunc("/returnbook", returnBook)
	http.ListenAndServe("", nil)
}
