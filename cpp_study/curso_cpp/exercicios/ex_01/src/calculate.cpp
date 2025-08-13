#include "calculate.h"

using namespace cal;

int Calculate::sum() {
    return numberA_ + numberB_;
};

int Calculate::minus() {
    return numberA_ - numberB_;
};

double Calculate::division() {
    return numberA_ / numberB_;
};

double Calculate::multiplicate() {
    return numberA_ * numberB_;
};

void Calculate::setNumbers(double numberA, double numberB) {
    numberA_ = numberA;
    numberB_ = numberB;
};