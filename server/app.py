from http.server import HTTPServer, BaseHTTPRequestHandler
import threading
from multiprocessing import Process, freeze_support
from tkinter import *
import json

freeze_support()
#********************* Start The Server ************************#

class helloHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('content-type', 'application/json')
        self.end_headers()
        data = {"name": "Alaaeddine", "message": "Hello World!"}
        self.wfile.write(json.dumps(data).encode())

def server_start():
    PORT = 9000
    server = HTTPServer(('', PORT), helloHandler)
    print(f'Server running on port {PORT}')
    server.serve_forever()
        

#********************* Start The Interface ************************#

win = Tk()
win.title("First Project")
win.geometry("445x230")
win.resizable(False, False)
default = "{arial} 12"

# Assets
button_img = PhotoImage(file="button.png")
button_img_on = PhotoImage(file="button_on.png")
button_img_hover = PhotoImage(file="button_hover.png")
button_img_click = PhotoImage(file="button_click.png")

#handling events
def btnPress(event, arg):
    arg[0].config(image=arg[1])
def btnEnter(event, arg):
    if not server_running:
        arg[0].config(image=arg[1])
def btnLeave(event, arg):
    if not server_running:
        arg[0].config(image=arg[1])

server_process= None
server_running = False
def server_start_command():
    global server_running
    global server_process
    global button

    if server_running:
        server_process.terminate()
        server_running= False
        print('server stops')
    else:
        server_process = Process(target=server_start, args=())
        server_process.start()
        server_running= True
        button.config(image=button_img_on)





button = Button(win, image=button_img, bd=0, command=server_start_command)
button.place(x=250, y=50, width=112, height=112)
button.bind("<ButtonPress-1>", lambda event,arg=[button,button_img_click]:btnPress(event, arg))
button.bind("<ButtonRelease-1>", lambda event,arg=[button,button_img_hover]:btnEnter(event, arg))
button.bind("<Enter>", lambda event,arg=[button,button_img_hover]:btnEnter(event, arg))
button.bind("<Leave>", lambda event,arg=[button,button_img]:btnLeave(event, arg))

host = 'localhost'
port = 9000
projects = 5

label1 = Label(win, text=f"Host : {host}", font=default, fg="#000")
label1.place(x=106,y=70)

label2 = Label(win, text=f"Port : {port}", font=default, fg="#000")
label2.place(x=106,y=95)

label3 = Label(win, text=f"Projects : {projects}", font=default, fg="#000")
label3.place(x=106,y=120)
# end gui

if __name__ == '__main__':
    win.mainloop()