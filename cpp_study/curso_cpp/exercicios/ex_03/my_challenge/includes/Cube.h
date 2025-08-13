#pragma once

namespace cbe {
    class Cube 
    {
        public:
            Cube(double length);
            void viewLength() const;

        private:
            double length_;
    };
};