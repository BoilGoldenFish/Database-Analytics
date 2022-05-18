package main

import(
  "fmt"
)

func main() {
  fmt.Println("Cache-Control: no-cache")
  fmt.Println("Set-Cookie: token=\n\n")
  fmt.Println("<!doctype html>")
  fmt.Println("<html>")

  fmt.Println("<head>")
  fmt.Println("<title>CGI Form</title>")
  fmt.Println("<script src=\"../collector.js\" defer></script>")
  fmt.Println("</head>")

  fmt.Println("<body>")
  fmt.Println("<h1 align=\"center\">Session Test</h1>")
  fmt.Println("<hr>")
  fmt.Println("<label for=\"cgi-lang\">CGI using Golang</label>")
  fmt.Println("<form action=\"/cgi-bin/go-sessions-1.go\" method=\"Post\" id=\"form\">")
  fmt.Println("<label>What is your name? <input type=\"text\" name=\"username\" autocomplete=\"off\"></label>")
  fmt.Println("<br>")
  fmt.Println("<input type=\"submit\" value=\"Test Sessioning\">")
  fmt.Println("</form>")

  fmt.Println("<a href=\"/\" style=\"display:inline-block;margin-top:20px;\">Home</a>")

  fmt.Println("</body>")

  fmt.Println("</html>")
}
