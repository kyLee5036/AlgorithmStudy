import sys
sys.stdin=open("input.txt", "rt")

n, k = map(int, input().split())
cnt = 0

for i in range(1, n):
  if n % i == 0:
    cnt+=1
  if cnt == k:
    print(cnt)
    break;  
else:
  print(-1)


