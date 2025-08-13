#include <iostream>

#include "Cube.h"
#include "Move.h"

using namespace std;
using namespace cbe;
using namespace mov;

int main() {
    Cube test(2);
    
    test.viewLength();

    Move test2(3);

    test2.viewNumber();


    return 0;
};

