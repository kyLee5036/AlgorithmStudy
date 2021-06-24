import sys
sys.stdin=open("input.txt", "rt")

T = int(input());

for i in range(T):
  n, s, e, k=map(int, input().split())
  alist = list(map(int, input().split()));
  alist = alist[s-1:e]
  alist.sort()
  print("$%d %d" %(i+1,alist[k-1]) )
