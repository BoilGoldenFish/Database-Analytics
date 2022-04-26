package main

import(
	"fmt"
	"os"
	"bufio"
)

func main(){
	fmt.Println("Cache-Control: no-cache")
	fmt.Println("Content-type: text/html\n\n")
	fmt.Println("<html><head><title>POST Request Echo</title></head><body><h1 align=center>POST Request Echo</h1><hr/>\n")
	fmt.Println("<b>Message Body:</b>")
	reader := bufio.NewReader(os.Stdin)
	s,_ := reader.ReadString('\n')
	fmt.Println(s)
	fmt.Println("<br/>")
	fmt.Println("</body></html>")
}