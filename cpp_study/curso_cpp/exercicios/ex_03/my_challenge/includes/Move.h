#pragma once

namespace mov {
    class Move 
    {
        public:
            Move(int number);
            void viewNumber() const;

        private:
            int number_;
    };
};