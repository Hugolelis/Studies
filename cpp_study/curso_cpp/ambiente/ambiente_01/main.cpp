/* 
########
##Libs##
########
*/
#include <iostream>

/* 
#########
##Class##
#########
*/
#include "Hypotenuse.h"

int main() {
    char repeat = 'S'; 
    double a, b;

    while (repeat == 'S')
    {
        std::cout << "Digite o valor de a: ";
        std::cin >> a;

        std::cout << "Digite o valor de b: ";
        std::cin >> b;

        hyp::Hypotenuse h(a, b);

        std::cout << "O valor da hypotenusa é: " << h.calculate() << "\n";

        std::cout << "Deseja calcular novamente? (S/N): ";
        std::cin >> repeat;
        repeat = std::toupper(static_cast<unsigned char>(repeat));
    }

    std::cout << "||| FIM |||" << std::endl;
}