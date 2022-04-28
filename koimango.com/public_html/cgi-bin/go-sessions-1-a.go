package main

import(
	"fmt"
	"os"
	"bufio"
	"strings"
)

func main(){
	temp := strings.Split(os.Getenv("HTTP_COOKIE"), ";")[0]
	name := strings.Split(temp, "=")[0]
	token := strings.Split(temp, "=")[1]

	if name =="token" && token!="destroyed" && token!="" {
		fmt.Println("Cache-Control: no-cache");
		fmt.Println("Content-type: text/html\n\n")
		fmt.Println("<html>")
		fmt.Println("<head>")
		fmt.Println("<title>Golang Sessions</title>")
		fmt.Println("</head>")
		fmt.Println("<body>")

		fmt.Println("<h1>Go Sessions Page 1</h1>")

		if name != ""{
			fmt.Println("Name:", token)
		}
		

		fmt.Println ("<br/><br/>")
		fmt.Println ("<a href=\"/cgi-bin/go-sessions-2.go\">Session Page 2</a><br/>")
		fmt.Println ("<a href=\"/cgi-bin/go-cgiform.go\">Go CGI Form</a><br />")
		fmt.Println ("<form style=\"margin-top:30px\" action=\"/cgi-bin/go-destroy-session.go\" method=\"get\">")
		fmt.Println ("<button type=\"submit\">Destroy Session</button>")
		fmt.Println ("</form>")
		fmt.Println ("<a href=\"https://koimango.com>Home</a><br/>")
		fmt.Println("</body></html>")
	} else {
		if token=="destroyed" || name!="token"{
			fmt.Println("Cache-Control: no-cache");
			fmt.Println("Content-type: text/html\n\n")
			fmt.Println("<html>")
			fmt.Println("<head>")
			fmt.Println("<title>Golang Sessions</title>")
			fmt.Println("</head>")
			fmt.Println("<body>")

			fmt.Println("<h1>Go Sessions Page 1</h1>")

			fmt.Println("No name found for this session")

			fmt.Println ("<br/><br/>")
			fmt.Println ("<a href=\"/cgi-bin/go-sessions-2.go\">Session Page 2</a><br/>")
			fmt.Println ("<a href=\"/cgi-bin/go-cgiform.go\">Go CGI Form</a><br />")
			fmt.Println ("<form style=\"margin-top:30px\" action=\"/cgi-bin/go-destroy-session.go\" method=\"get\">")
			fmt.Println ("<button type=\"submit\">Destroy Session</button>")
			fmt.Println ("</form>")
			fmt.Println ("<a href=\"https://koimango.com>Home</a><br/>")
			fmt.Println("</body></html>")
		} else {
			reader := bufio.NewReader(os.Stdin)
			s,_ := reader.ReadString('\n')
			value := strings.Split(s, "=")[1]

			fmt.Println("Cache-Control: no-cache")
			if value == ""{
				fmt.Println("Set-Cookie: token=No name found for session")
			} else {
				fmt.Println("Set-Cookie: token=", value)
			}
			fmt.Println("Content-type: text/html\n\n")
			fmt.Println("<html>")
			fmt.Println("<head>")
			fmt.Println("<title>Golang Sessions</title>")
			fmt.Println("</head>")
			fmt.Println("<body>")

			fmt.Println("<h1>Go Sessions Page 1</h1>")

			if name != ""{
				fmt.Println("Name: ", value)
			}
			

			fmt.Println ("<br/><br/>")
			fmt.Println ("<a href=\"/cgi-bin/go-sessions-2.go\">Session Page 2</a><br/>")
			fmt.Println ("<a href=\"/cgi-bin/go-cgiform.go\">Go CGI Form</a><br />")
			fmt.Println ("<form style=\"margin-top:30px\" action=\"/cgi-bin/go-destroy-session.go\" method=\"get\">")
			fmt.Println ("<button type=\"submit\">Destroy Session</button>")
			fmt.Println ("</form>")
			fmt.Println ("<a href=\"https://koimango.com>Home</a><br/>")
			fmt.Println("</body></html>")
		}
		
	}
}