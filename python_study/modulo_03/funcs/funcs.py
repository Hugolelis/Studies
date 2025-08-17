def sum(a, b):
    return a + b

print(sum(2, 2))

def len_list(list):
    return len(list)

listT = [1, 2, 3, 4]

print(len_list(listT))

def names_list(*names):
    for name in names:
        print(name)

print("Hugo", "Caio", "Alan")

L=[1,3,2]
print(sorted(L))