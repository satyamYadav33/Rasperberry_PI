#!/usr/bin/env python3
import http.server
import socketserver
import os
import webbrowser
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"==================================================")
        print(f" SBC Showcase & Head-to-Head Comparison Server ")
        print(f" Running at: http://localhost:{PORT}")
        print(f" - Main Usage Hub:     http://localhost:{PORT}/index.html")
        print(f" - Deep Compare Page:  http://localhost:{PORT}/compare.html")
        print(f" Press Ctrl+C to stop.")
        print(f"==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

if __name__ == "__main__":
    start_server()
