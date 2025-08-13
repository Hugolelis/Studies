# Nome do executável final
TARGET = main

# Diretórios
SRC_DIR = src
INC_DIR = includes
BUILD_DIR = build

# Fontes e cabeçalhos
SRCS = $(SRC_DIR)/main.cpp $(SRC_DIR)/Odd_or_pair.cpp
OBJS = $(SRCS:$(SRC_DIR)/%.cpp=$(BUILD_DIR)/%.o)
HDRS = $(INC_DIR)/Odd_or_pair.h

# Compilador e flags
CXX = g++
CXXFLAGS = -std=c++14 -Wall -Wextra -g -I$(INC_DIR)

.PHONY: all clean

all: $(TARGET)

# Linka o executável
$(TARGET): $(OBJS)
	$(CXX) $(OBJS) -o $@

# Compilar .cpp em .o dentro de build/, garantindo que build exista antes
$(BUILD_DIR)/%.o: $(SRC_DIR)/%.cpp $(HDRS) $(BUILD_DIR)
	$(CXX) $(CXXFLAGS) -c $< -o $@

# Criar diretório build/ se não existir
$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

# Limpar arquivos objeto e executável
clean:
	rm -rf $(BUILD_DIR) $(TARGET)
