#!/usr/bin/env python3
"""
Proxy a live server as a dev server

__author__ = "Roy Portas"
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.request import urlopen

# The server to proxy to
PROXY = 'https://robogalsbrisbane.org'
# The local port
LOCAL_PORT = 8080

def get_proxy(path):
    """ Gets the data from the destination server """
    resp = urlopen('{}{}'.format(PROXY, path))
    content_type = resp.info()['Content-Type']
    data = resp.read()

    return {
        'data': data,
        'content_type': content_type
    }

class RequestHandler(BaseHTTPRequestHandler):
    """ Handles the HTTP requests """

    def do_GET(self):
        resp = get_proxy(self.path)
        self.send_response(200)
        self.send_header('Content-Type', resp['content_type'])
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(resp['data'])


def run():
    """ Runs the server on LOCAL_PORT """
    server_address = ('', LOCAL_PORT)
    print('Running proxy on port {}'.format(server_address[1]))
    httpd = HTTPServer(server_address, RequestHandler)
    httpd.serve_forever()

if __name__ == '__main__':
    run()
