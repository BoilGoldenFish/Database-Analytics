package main

import(
	"fmt"
	"time"
	"net"
)

func main(){
	current := time.Now()

	conn, error := net.Dial("udp", "8.8.8.8:80")  
	if error != nil {  
	fmt.Println(error)  
	
	}  
  
	defer conn.Close()  
	ipAddress := conn.LocalAddr().(*net.UDPAddr)

	fmt.Println("Cache-Control: no-cache")
	fmt.Println("Content-type: text/html\n\n")
	fmt.Println("<html><head><title>Hello CGI World</title><script src=\"../collector.js\" defer></script></head><body><h1 align=center>Hello HTML World</h1><hr/>\n")
	fmt.Println("Hello World<br/>\n")
	fmt.Println("This program was generated at:", current.Format(time.ANSIC), "\n<br/>")
	fmt.Println("Your current IP address is:", ipAddress, "\n<br/>")
}