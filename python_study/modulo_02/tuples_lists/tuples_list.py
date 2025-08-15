#tuples (não podem ser alteradas!)

tupleTest: tuple = (1, 2, 3, 4, 5, 2)
tupleTestComplex: tuple = (1,2,("A","B"))

print(tupleTest)
print(tupleTest[2])
print(tupleTest[0:3])

print(tupleTestComplex[2][0])
print(len(tupleTestComplex))

print(sorted(tupleTest))

test = set([1,2,3,3,3,3,3,3,3,3])

print(test)

# lists (são mutaveis!)

listing: list = ['Michael Jackson', 2005]
l2: list = listing.extend(["extendendo"])
listing.append('adicionando')
listing[0] = "teste"
del(listing[1])

print(listing)

strSplit: str = "Hugo de Lelis"
print(strSplit.split())
print(help(listing))