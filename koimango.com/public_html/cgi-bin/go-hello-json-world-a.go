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
	fmt.Println("Content-type: application/json\n\n")
	fmt.Println("{\n\t\"message\": \"Hello World\",")
	fmt.Println("\t\"date\": \"", current.Format(time.ANSIC), "\",")
	fmt.Println("\t\"currentIP\": \"", ipAddress, "\"\n}")
}