# Nome do executável final
TARGET = main

# Fontes do projeto
SRCS = main.cpp cube.cpp

# Arquivos objeto (automático com substituição)
OBJS = $(SRCS:.cpp=.o)

# Compilador e flags
CXX = g++
CXXFLAGS = -std=c++14 -Wall -Wextra -g

# Regra principal
$(TARGET): $(OBJS)
	$(CXX) $(OBJS) -o $(TARGET)

# Compilar arquivos .cpp em .o
%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

# Limpar arquivos gerados
clean:
	rm -f *.o $(TARGET)
