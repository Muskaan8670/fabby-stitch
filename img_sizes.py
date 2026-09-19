import os
import struct

def get_image_size(file_path):
    with open(file_path, 'rb') as f:
        head = f.read(24)
        if len(head) != 24: return
        if head.startswith(b'\x89PNG\r\n\x1a\n'):
            return struct.unpack('>ii', head[16:24])
        elif head[:2] == b'\xff\xd8':
            f.seek(0)
            size = 2
            ftype = 0
            while not 0xc0 <= ftype <= 0xcf:
                f.seek(size, 1)
                byte = f.read(1)
                while ord(byte) == 0xff:
                    byte = f.read(1)
                ftype = ord(byte)
                size = struct.unpack('>H', f.read(2))[0] - 2
            f.seek(1, 1)
            h, w = struct.unpack('>HH', f.read(4))
            return (w, h)
        else:
            return None

dir_path = 'd:/fabby_stitch/public/images'
for file_name in os.listdir(dir_path):
    if file_name.endswith('.jpg') or file_name.endswith('.png'):
        full_path = os.path.join(dir_path, file_name)
        try:
            size = get_image_size(full_path)
            if size:
                print(f"{file_name}: {size[0]}x{size[1]}")
        except Exception as e:
            pass
