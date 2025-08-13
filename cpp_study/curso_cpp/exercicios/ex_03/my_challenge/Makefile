# Nome do executável final
TARGET = main

# Diretórios
SRC_DIR = src
INC_DIR = includes
BUILD_DIR = build

# Encontra automaticamente todos os .cpp na pasta src/
SRCS = $(wildcard $(SRC_DIR)/*.cpp)
# Adiciona main.cpp se estiver fora do SRC_DIR
SRCS += main.cpp

# Converte arquivos .cpp para .o na pasta build/
OBJS = $(patsubst %.cpp, $(BUILD_DIR)/%.o, $(notdir $(SRCS)))

# Compilador e flags
CXX = g++
CXXFLAGS = -std=c++14 -Wall -Wextra -g -I$(INC_DIR)

.PHONY: all clean

all: $(TARGET)

# Linka todos os objetos no executável
$(TARGET): $(OBJS)
	$(CXX) $(CXXFLAGS) $^ -o $@

# Compila cada .cpp em build/*.o (tanto src/ quanto ./)
$(BUILD_DIR)/%.o: $(SRC_DIR)/%.cpp | $(BUILD_DIR)
	$(CXX) $(CXXFLAGS) -c $< -o $@

$(BUILD_DIR)/%.o: %.cpp | $(BUILD_DIR)
	$(CXX) $(CXXFLAGS) -c $< -o $@

# Cria o diretório build se não existir
$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

# Limpa o diretório build e o executável
clean:
	rm -rf $(BUILD_DIR) $(TARGET)
