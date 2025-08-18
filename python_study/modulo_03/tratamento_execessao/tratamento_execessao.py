try:
    print('try')
except IOError as e:
    print(e)
else:
    print("successfully")
finally:
    print("Terminou")