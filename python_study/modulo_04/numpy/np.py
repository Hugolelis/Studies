import numpy as np
list1 = [1, 2, 3, 4]
a = np.array(list1)
print(a)
print(a.size, a.ndim, a.shape)


a=np.array([-1,1]) 
b=np.array([1,1]) 

print(np.dot(a,b))

X=np.array([[1,0,1],[2,2,2]]) 
out=X[0:2,2]

print(out)

X=np.array([[1,0],[0,1]]) 
Y=np.array([[2,2],[2,2]]) 
Z=np.dot(X,Y)

print(Z)


a=np.array([0,1,0,1,0]) 

b=np.array([1,0,1,0,1]) 

print(a*b)

a=np.array([1,1,1,1,1]) 

print(a+10)