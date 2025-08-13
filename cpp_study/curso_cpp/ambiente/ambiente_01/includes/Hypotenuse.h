#pragma once

namespace hyp {
    class Hypotenuse
    {
    public:
        Hypotenuse(double a, double b);
        double calculate();
    private:
        double a_;
        double b_;
        double c_;
    };
}