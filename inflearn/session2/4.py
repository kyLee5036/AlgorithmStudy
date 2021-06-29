import sys

N = int(input())
a = list(map(int, input().split()))

sum = sum(a)
ave = round(sum/N)

minResult=2147000000
res = 0;
for idx, x in enumerate(a):
  tmp = abs(x-ave)
  if tmp < minResult:
    minResult = tmp
    score=x
    res=idx+1
  elif tmp == minResult:
    if x > score:
      score=x
      res=idx+1

print(ave, res)