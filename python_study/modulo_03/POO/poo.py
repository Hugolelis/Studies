class Circle:
    def __init__(self, color, width, height):
        self.color = color
        self.width = width
        self.height = height


    def __repr__(self):
        return f"<Circle color={self.color!r} width={self.width} height={self.height}>"
    
    def only_color(self):
        return f"<Circle color={self.color!r}>"

# Testando
c1 = Circle("red", 10, 20)
c2 = Circle("blue", 5, 5)

print(c1)  # <Circle color='red' width=10 height=20>
print(c2)  # <Circle color='blue' width=5 height=5>

print(c1.only_color())

