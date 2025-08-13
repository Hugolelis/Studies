#include <iostream>
#include "calculate.h"

using namespace cal;
using namespace std;

int main() {
    Calculate x;

    x.setNumbers(4, 2);

    double sum  = x.sum();
    double minus = x.minus();
    double division = x.division();
    double multiplicate = x.multiplicate();

    cout << "Operação de +: "<< sum << endl;
    cout << "Operação de -: "<< minus << endl;
    cout << "Operação de *: "<< multiplicate << endl;
    cout << "Operação de /: "<< division << endl;

    return 0;
};