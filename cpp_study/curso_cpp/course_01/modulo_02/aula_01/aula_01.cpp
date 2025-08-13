#include <iostream>

int main() {
    int num = 7;

    std::cout << "Value " << num << std::endl; // valor padrão
    std::cout << "Address " << &num << std::endl; // valor no endereço de memoria (operador &)

    return 0;
};