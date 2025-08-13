// memoria heat

#include <iostream>

int main() {
    int *numPtr = new int;

    std::cout << "*numPtr: " << *numPtr << std::endl; // valor endereço 
    std::cout << "numPtr: " << numPtr << std::endl; // endereço var
    std::cout << "&numPtr: " << &numPtr << std::endl; // endereço ponteiro

    *numPtr = 42;
    std::cout << "*numPtr: " << *numPtr << std::endl; // valor endereço 
    std::cout << "numPtr: " << numPtr << std::endl; // endereço var
    std::cout << "&numPtr: " << &numPtr << std::endl; // endereço ponteiro

    return 0;
};