package main

import(
	"fmt"
)

func main() {
	fmt.Println("Cache-Control: no-cache");
	fmt.Println("Set-Cookie: token=destroyed");
	fmt.Println("Content-type: text/html\n\n");

	// Body - HTML
	fmt.Println("<html>");
	fmt.Println("<head><title>Go Session Destroyed</title><script src=\"../collector.js\" defer></script></head>");
	fmt.Println("<body>");
	fmt.Println("<h1>Go Session Destroyed</h1>");

	// Links
	fmt.Println("<a href=\"/cgi-bin/go-sessions-1.go\">Back to Page 1</a>");
	fmt.Println("<br />");
	fmt.Println("<a href=\"/cgi-bin/go-sessions-2.go\">Back to Page 2</a>");
	fmt.Println("<br />");
	fmt.Println("<a href=\"/cgi-bin/go-cgiform.go\">Go CGI Form</a>");

	fmt.Println("</body>");
	fmt.Println("</html>");
}
