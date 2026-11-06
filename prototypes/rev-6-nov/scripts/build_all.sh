set -e
cd "$(dirname "$0")"
python3 mkimg.py >/dev/null
for s in home about team academy hub fif inc acc rest; do python3 $s.py >/dev/null; done
echo built
