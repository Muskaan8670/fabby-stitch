import sys
from PIL import Image
import os

def average_hash(image_path, hash_size=8):
    try:
        img = Image.open(image_path).convert('L').resize((hash_size, hash_size), Image.Resampling.LANCZOS)
        pixels = list(img.getdata())
        avg = sum(pixels) / len(pixels)
        return ''.join(['1' if p > avg else '0' for p in pixels])
    except Exception as e:
        return None

def hamming_distance(h1, h2):
    if h1 is None or h2 is None: return 999
    return sum(c1 != c2 for c1, c2 in zip(h1, h2))

ref_img = 'd:/fabby_stitch/public/images/landing-online-retail.png'
ref_hash = average_hash(ref_img)

dir_path = 'd:/fabby_stitch/public/images'
for file_name in os.listdir(dir_path):
    if file_name.endswith('.jpg') or file_name.endswith('.png'):
        full_path = os.path.join(dir_path, file_name)
        h = average_hash(full_path)
        dist = hamming_distance(ref_hash, h)
        if dist < 10:
            print(f"Match: {file_name} (Distance: {dist})")
