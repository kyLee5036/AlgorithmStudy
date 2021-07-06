n = int(input())
a = list(map(int, input().split()))
def digit_sum(x):
  sum = 0
  for i in str(x):
    # print(i, end=' ')
    sum+=int(i)
    return sum;

max=-21470000
for x in a:
  tot=digit_sum(x)
  if tot>max:
    tot=tot
    res=x
    
print(res)