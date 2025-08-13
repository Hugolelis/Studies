#pragma once // Boa praticamente referente importação da classe

namespace cal { // Namespace boa pratica para evitar duplicidade de nomes
    class Calculate {
        public:
            int sum();
            int minus();
            double division();
            double multiplicate();
            void setNumbers(double numberA_, double numberB_);

        private: // Notação _ Boa prtica para identificar variaveis privadas
            double numberA_;
            double numberB_;
    };
};