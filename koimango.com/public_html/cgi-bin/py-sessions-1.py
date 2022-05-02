#!/usr/bin/python3
import os

temp = os.environ.get("HTTP_COOKIE").split(';')[0]
name = temp.split('=')[0]
token = temp.split('=')[1]

if name =="token" and token!="destroyed" and token!="" :
    print("Cache-Control: no-cache")
    print("Content-type: text/html\n\n")
    print("<html>")
    print("<head>")
    print("<title>Python Sessions</title>")
    print("</head>")
    print("<body>")

    print("<h1>Python Sessions Page 1</h1>")

    if name != "":
        print("Name:" + token)


    print ("<br/><br/>")
    print ("<a href=\"/cgi-bin/py-sessions-2.py\">Session Page 2</a><br/>")
    print ("<a href=\"/cgi-bin/py-cgiform.py\">Python CGI Form</a><br />")
    print ("<form style=\"margin-top:30px\" action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
    print ("<button type=\"submit\">Destroy Session</button>")
    print ("</form>")
    print ("<a href=\"https://koimango.com>Home</a><br/>")
    print("</body></html>")

else:
    if token=="destroyed" or name!="token":
        print("Cache-Control: no-cache")
        print("Content-type: text/html\n\n")
        print("<html>")
        print("<head>")
        print("<title>Python Sessions</title>")
        print("</head>")
        print("<body>")

        print("<h1>Python Sessions Page 1</h1>")

        print("No name found for this session")

        print ("<br/><br/>")
        print ("<a href=\"/cgi-bin/py-sessions-2.py\">Session Page 2</a><br/>")
        print ("<a href=\"/cgi-bin/py-cgiform.py\">Python CGI Form</a><br />")
        print ("<form style=\"margin-top:30px\" action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
        print ("<button type=\"submit\">Destroy Session</button>")
        print ("</form>")
        print ("<a href=\"https://koimango.com>Home</a><br/>")
        print("</body></html>")
    else:
        value = input().split('=')[1]

        print("Cache-Control: no-cache")
        if value == "":
            print("Set-Cookie: token=No name found for session")
        else:
            print("Set-Cookie: token="+ value)
        print("Content-type: text/html\n\n")
        print("<html>")
        print("<head>")
        print("<title>Golang Sessions</title>")
        print("</head>")
        print("<body>")

        print("<h1>Python Sessions Page 1</h1>")

        if name != "":
            print("Name: "+ value)
        

        print ("<br/><br/>")
        print ("<a href=\"/cgi-bin/py-sessions-2.py\">Session Page 2</a><br/>")
        print ("<a href=\"/cgi-bin/py-cgiform.py\">Go CGI Form</a><br />")
        print ("<form style=\"margin-top:30px\" action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
        print ("<button type=\"submit\">Destroy Session</button>")
        print ("</form>")
        print ("<a href=\"https://koimango.com>Home</a><br/>")
        print("</body></html>")
