"""Make web copies for the artifact: python3 mkimg.py  (reads IMGS list from imgs.txt: dest<TAB>source)"""
import sys, pathlib
from PIL import Image, ImageOps
S = pathlib.Path(__file__).resolve().parent.parent
PUB = pathlib.Path('/home/user/silal-io/public/photos')
for line in (S/'scripts/imgs.txt').read_text().splitlines():
    if not line.strip() or line.startswith('#'): continue
    dest, src, *mx = line.split('\t')
    mx = int(mx[0]) if mx else 1400
    out = S/'site/rev/img'/dest
    f = PUB/src
    if not f.exists():
        norm = lambda t: ''.join(c if c.isalnum() else ' ' for c in t).split()
        f = next(x for x in (PUB/src).parent.iterdir() if norm(x.name) == norm(pathlib.Path(src).name))
    im = ImageOps.exif_transpose(Image.open(f)).convert('RGB')
    im.thumbnail((mx, mx))
    im.save(out, 'JPEG', quality=74, optimize=True, progressive=True)
    print(dest, im.size, out.stat().st_size//1024, 'KB')
