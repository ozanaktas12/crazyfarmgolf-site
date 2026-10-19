#!/usr/bin/env python3
"""Yerel önizleme: Vercel'in cleanUrls + yönlendirmelerini taklit eder. Kullanım: python3 onizle.py [port]"""
import http.server, json, os, sys

KOK = os.path.dirname(os.path.abspath(__file__))
YON = {r["source"]: r["destination"] for r in json.load(open(os.path.join(KOK, "vercel.json")))["redirects"]}

class Isleyici(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=KOK, **k)

    def do_GET(self):
        yol = self.path.split("?")[0].split("#")[0]
        hedef = YON.get(yol) or (yol[:-5] if yol.endswith(".html") else None)
        if hedef is not None:
            self.send_response(308); self.send_header("Location", hedef or "/"); self.end_headers(); return
        if yol != "/" and "." not in os.path.basename(yol) and os.path.isfile(os.path.join(KOK, yol.lstrip("/") + ".html")):
            self.path = yol + ".html"
        super().do_GET()

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8090
print(f"http://localhost:{port}/")
http.server.ThreadingHTTPServer(("127.0.0.1", port), Isleyici).serve_forever()
