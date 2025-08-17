a = 6

print(a == 6)
print(a > 5)
print(a <= 5)
print(a != 2)

age = 18

if age > 18:
    print('Pode entrar')
elif age == 18:
    print('legal')
else:
    print('não pode')


print(not(False))

album_year = 1980

if (album_year < 1980) or (album_year > 1989):
    print("The Album wad made in the 70´s or 90´s")
else:
    print("The Album was made in the 1980´s")

if(album_year > 1979) and (album_year < 1990):
    print("This album was made in 80´s")