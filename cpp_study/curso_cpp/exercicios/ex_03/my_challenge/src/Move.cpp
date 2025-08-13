#include <iostream>
#include "Move.h"

using namespace std;
using namespace mov;

Move::Move(int number) {
    number_ = number;
}

void Move::viewNumber() const {
    cout << "number: " << number_ << endl;
}