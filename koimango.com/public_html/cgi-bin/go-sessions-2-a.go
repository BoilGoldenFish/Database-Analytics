package main

import(
	"fmt"
	"os"
	"strings"
)

func main(){
	fmt.Println("Cache-Control: no-cache")
	fmt.Println("Content-type: text/html\n\n")
	fmt.Println("<html>")
	fmt.Println("<head>")
	fmt.Println("<title>Golang Sessions</title><script src=\"../collector.js\" defer></script>")
	fmt.Println("</head>")
	fmt.Println("<body>")

	fmt.Println("<h1>Go Sessions Page 2</h1>")

	temp := strings.Split(os.Getenv("HTTP_COOKIE"), ";")[0]
	name := strings.Split(temp, "=")[0]
	token := strings.Split(temp, "=")[1]

	if name =="token" && token!="destroyed" && token!="" {
		fmt.Println("Name: ", token)
	} else {
		fmt.Println("No name found for the session")
	}

	fmt.Println ("<br/><br/>")
	fmt.Println ("<a href=\"/cgi-bin/go-sessions-1.go\">Session Page 1</a><br/>")
	fmt.Println ("<a href=\"/cgi-bin/go-cgiform.go\">Go CGI Form</a><br />")
	fmt.Println ("<form style=\"margin-top:30px\" action=\"/cgi-bin/go-destroy-session.go\" method=\"get\">")
	fmt.Println ("<button type=\"submit\">Destroy Session</button>")
	fmt.Println ("</form>")
	fmt.Println ("<a href=\"https://koimango.com>Home</a><br/>")

	fmt.Println("</body></html>")

}