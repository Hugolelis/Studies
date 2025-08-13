// ponteiros

#include <iostream>

int main() {
    int num = 7;

    std::cout << "num: " << num << std::endl; // valor literal de num
    std::cout << "num address: " << &num << std::endl; // endereço de num

    int *p = &num; // criação do ponteiro de num
    std::cout << "p: " << p << std::endl; // endereço de num por ponteiro de p
    std::cout << "&p: " << &p << std::endl; // endereço de p
    std::cout << "*p: " << *p << std::endl; // desferenciação de p (7)

    *p = 42;
    std::cout << "*p changed to 42" << std::endl;
    std::cout << "num: " << num << std::endl;

    return 0;
};