print(range(10, 25))
print(range(0, 3))

squares = ["red", "blue", "black", "pruple"]

for i in range(len(squares)):
    squares[i] = "white"

print(squares)

for square in squares:
    print(square)

for i, square in enumerate(squares):
    print(f"{i} = {square}")

squares2 = ["red", "blue", "black", "pruple"]

i =0

while(squares2[i] != "black"):
    print(squares2[i])
    i+=1

for x in ['A', 'B', 'C']:
    print(x + 'A')

for i, x in enumerate(['A', 'B', 'C']):
    print(i, x)
