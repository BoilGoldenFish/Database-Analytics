package main

import(
	"fmt"
	"os"
	"strings"
	"net/url"
)

func main() {
	fmt.Println("Cache-Control: no-cache")
	fmt.Println("Content-type: text/html\n\n")
	fmt.Println("<html><head><title>GET query string</title></head><body><h1 align=center>GET query string</h1><hr/>\n")
	fmt.Println("Raw query string:", os.Getenv("QUERY_STRING"), "<br/><br/>")
	fmt.Println("<table> Formatted Query String: <br/>")

	s := strings.Split(os.Getenv("QUERY_STRING"), "&")
	for i:= range s{
		fmt.Println(s[i], "<br/>")
	}

	fmt.Println("</body></html>")
}