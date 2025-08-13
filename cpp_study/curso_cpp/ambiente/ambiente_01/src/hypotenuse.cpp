/* 
########
##Libs##
########
*/
#include <iostream>
#include <cmath>

/* 
#########
##Class##
#########
*/
#include "Hypotenuse.h"

hyp::Hypotenuse::Hypotenuse(double a , double b) {
    a_ = a;
    b_ = b;
};

double hyp::Hypotenuse::calculate() {
    a_ = pow(a_, 2);
    b_ = pow(b_, 2);

    c_ = sqrt(a_ + b_);

    return c_;
}