# conjunsto não registram a posição dos elemntos e possuem apenas elemnetos unicos

album_list = ["Michael Jackson", "Thriller", "Thriller"]

album_set = set(album_list)
album_set.add("AC/DC")
album_set.add("SOD")

album_set.remove("Thriller")

print(album_set)

print("SOD" in album_set)

album_set2 = set(album_list)

print(album_set & album_set2)