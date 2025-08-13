#include <iostream>
#include "Cube.h"

using namespace std;
using namespace cbe;

// constructors

Cube::Cube(double length) {
    length_ = length;
}

void Cube::viewLength() const {
    cout << "Length: " << length_ << endl;
}