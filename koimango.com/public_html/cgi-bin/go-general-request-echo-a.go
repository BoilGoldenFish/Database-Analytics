package main

import(
	"fmt"
	"os"
	"bufio"
)

func main() {
	fmt.Println("Cache-Control: no-cache")
	fmt.Println("Content-type: text/html\n\n")
	fmt.Println("<html><head><title>General Request Echo</title><script src=\"../collector.js\" defer></script></head><body><h1 align=center>General Request Echo</h1><hr/>\n")
	fmt.Println("<table>\n")
	fmt.Println("<tr><td>Protocol:</td><td>", os.Getenv("SERVER_PROTOCOL"), "</td></tr>\n")
	fmt.Println("<tr><td>Method:</td><td>" + os.Getenv("REQUEST_METHOD") + "</td></tr>\n")
	fmt.Println("<tr><td>Message Body:</td><td>\n")

	reader := bufio.NewReader(os.Stdin)
	s,_ := reader.ReadString('\n')
	fmt.Println(s)
	fmt.Println("<br/>")
	fmt.Println("</body></html>")
}