import sys,glob
from PIL import Image
pre, out = sys.argv[1], sys.argv[2]; cols=int(sys.argv[3]) if len(sys.argv)>3 else 4
fs=sorted(glob.glob(pre+'_*.png')); W=480
ims=[Image.open(f) for f in fs]; h=int(ims[0].height*W/ims[0].width)
rows=(len(ims)+cols-1)//cols; sheet=Image.new('RGB',(cols*W+(cols-1)*6,rows*h+(rows-1)*6),'white')
for i,im in enumerate(ims): sheet.paste(im.convert('RGB').resize((W,h)),((i%cols)*(W+6),(i//cols)*(h+6)))
sheet.save(out); print(out, sheet.size)
