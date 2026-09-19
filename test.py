import urllib.request
import re

html = urllib.request.urlopen('https://fabbystitch.com').read().decode('utf-8', errors='ignore')
urls = set(re.findall(r'https://fabbystitch\.com/[^\s"\'\>]+?\.(?:jpg|png|webp)', html))
for u in urls:
    print(u)
