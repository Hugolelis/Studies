// construtor personalizado

#include <iostream>

using namespace std;

namespace aml {
    class Animal {
        private:
            string sound_;
            
        public:
            Animal(string sound); // construtor 
            void animalSound();
        };
        
    Animal::Animal(string sound) { // declaração das variaveis
        sound_ = sound;
    };
}

void aml::Animal::animalSound() {
    cout << sound_ << endl;
}

int main() {
    aml::Animal p("Au Au!");

    p.animalSound();

    return 0;
}
