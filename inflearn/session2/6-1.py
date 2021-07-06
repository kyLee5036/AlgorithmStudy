n = int(input())
a = list(map(int, input().split()))
def digit_sum(x):
  sum = 0
  while x>0:
    sum+=x%10
    x=x//10
    return sum

max=-21470000
for x in a:
  tot=digit_sum(x)
  if tot>max:
    tot=tot
    res=x
    
print(res)