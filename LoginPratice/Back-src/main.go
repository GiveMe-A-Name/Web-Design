package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

//Db 数据库对象
var Db *sql.DB

func init() {
	// 连接数据库对象
	db, err := sql.Open("mysql", "username:password@tcp(localhost:3306)/xxx")
	if err != nil {
		// 若连接数据库出现问题，打印错误并结束程序
		log.Fatal(err)
		return
	}
	// 给数据库对象赋值
	Db = db
}

// CORS 设置跨域响应头
func CORS(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

// login 登录处理函数
func login(w http.ResponseWriter, r *http.Request) {
	CORS(&w)
	//获得username
	username := r.FormValue("username")

	//查询当前账号，对应的password
	row := Db.QueryRow("select password from xxx where username=? ", username)
	var passwordSQL string
	// passwordlSQL变量接受查询结果
	err := row.Scan(&passwordSQL)

	//若出现sql.ErrNoRows则代表没有查到该用户对应的密码，
	if err == sql.ErrNoRows {
		fmt.Println(err)
		w.Write([]byte("该用户不存在"))
		return
	} else if err != nil {
		fmt.Println(err)
		w.Write([]byte("服务器错误500"))
		return
	}
	// 查看password和查询的passwordSQL是不是相等。
	password := r.FormValue("password")
	if passwordSQL == password {
		w.Write([]byte("correct"))
	} else {
		w.Write([]byte("账号或密码错误"))
	}
	return
}

// register 处理函数
func register(w http.ResponseWriter, r *http.Request) {
	CORS(&w)

	//获得 username,password,nickname
	username := r.FormValue("username")
	password := r.FormValue("password")
	// 若表单中没有username,
	// 则代表返回空字符串
	nickname := r.FormValue("nickname")
	var err error
	if nickname == "" {
		// 若nickname为空，就不进行插入
		_, err = Db.Exec("insert into xxx (username,password) values(?,?) ", username, password)
	} else {
		_, err = Db.Exec("insert into xxx (username,password,nickname) values(?,?,?) ", username, password, nickname)
	}

	if err != nil {
		// 这里实际上由bug，
		// err!=nil不一定就代表该用户已存在，
		// 还有可能服务器出错，或者数据库出错
		fmt.Println(err)
		w.Write([]byte("该用户已经存在"))
		return
	}
	w.Write([]byte("submited"))

}

// test
func test(w http.ResponseWriter, r *http.Request) {
	CORS(&w)
	w.WriteHeader(403)
	// w.Write([]byte("hello world"))
}

func main() {
	http.HandleFunc("/login", login)
	http.HandleFunc("/register", register)
	http.HandleFunc("/test", test)
	http.ListenAndServe("", nil)
}
