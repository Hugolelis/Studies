#include <iostream>
#include "Odd_or_pair.h"

using namespace ool;
using namespace std;

void OddOrPair::setNumber(int number) {
    number_ = number;
};

void OddOrPair::verifyNumber() {
    
    if (number_ % 2 == 0) {
        cout << "Número par!" << endl;
    } else {
        cout << "Número impar!" << endl;
    }

};