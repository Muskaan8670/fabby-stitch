import sys
from PIL import Image
import os

def dhash(image_path, hash_size=8):
    try:
        img = Image.open(image_path).convert('L').resize((hash_size + 1, hash_size), Image.Resampling.LANCZOS)
        pixels = list(img.getdata())
        diff = []
        for row in range(hash_size):
            for col in range(hash_size):
                pixel_left = img.getpixel((col, row))
                pixel_right = img.getpixel((col + 1, row))
                diff.append('1' if pixel_left > pixel_right else '0')
        return ''.join(diff)
    except Exception as e:
        return None

def hamming_distance(h1, h2):
    if h1 is None or h2 is None: return 999
    return sum(c1 != c2 for c1, c2 in zip(h1, h2))

ref_img = 'd:/fabby_stitch/public/images/landing-online-retail.png'
ref_hash = dhash(ref_img)

dir_path = 'd:/fabby_stitch/public/images'
results = []
for file_name in os.listdir(dir_path):
    if file_name.endswith('.jpg') or file_name.endswith('.png'):
        full_path = os.path.join(dir_path, file_name)
        h = dhash(full_path)
        dist = hamming_distance(ref_hash, h)
        results.append((dist, file_name))

results.sort()
for dist, file_name in results[:5]:
    print(f"{file_name}: {dist}")
