#include <iostream>

// demonstração que o endereço de memoria tende a 0 ou seja ele possui uma ordem decrescente

void foo() {
    int x = 42;

    std::cout << "Value in foo() = " << x << std::endl; // valor padrão
    std::cout << "Address in foo() = " << &x << std::endl; // valor no endereço de memoria (operador &)
}

int main() {
    int num = 7;

    std::cout << "Value in main() = " << num << std::endl; // valor padrão
    std::cout << "Address in main() = " << &num << std::endl; // valor no endereço de memoria (operador &)

    foo();

    return 0;
}