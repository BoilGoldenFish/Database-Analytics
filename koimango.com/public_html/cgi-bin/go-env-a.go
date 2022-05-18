package main

import(
	"fmt"
	"os"
	"strings"
)

func main() {
	fmt.Println("Cache-Control: no-cache")
	fmt.Println("Content-type: text/html\n\n")
	fmt.Println("<html><head><title>Hello CGI World</title><script src=\"../collector.js\" defer></script></head><body><h1 align=center>Hello ENV World</h1><hr/>\n")
	for _, element := range os.Environ() {
        variable := strings.Split(element, "=")
        fmt.Println(variable[0],variable[1])
		fmt.Println("\n<br/>")	
    }
	fmt.Println("</body></html>")
}