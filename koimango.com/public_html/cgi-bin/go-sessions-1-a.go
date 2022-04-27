package main

import(
	"fmt"
	"os"
	"bufio"
)

func main(){
	fmt.Println("Cache-Control: no-cache")
	fmt.Println("Content-type: text/html\n\n")
	fmt.Println("<html>")
	fmt.Println("<head>")
	fmt.Println("<title>Golang Sessions</title>")
	fmt.Println("</head>")
	fmt.Println("<body>")

	fmt.Println("<h1>Go Sessions Page 1</h1>")

	reader := bufio.NewReader(os.Stdin)
	s,_ := reader.ReadString('\n')
	fmt.Println(s)

	fmt.Println("</body></html>")
}