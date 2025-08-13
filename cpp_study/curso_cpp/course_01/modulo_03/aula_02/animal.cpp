#include <iostream>

using namespace std;

namespace aml {
    class Animal {
    private:
        string sound_;

    public:
        Animal(string sound);                      // Construtor padrão
        Animal(const Animal & obj);                // Construtor de cópia (agora público)
        Animal& operator=(const Animal & obj);     // Construtor assigment
        ~Animal();                                 // Construtor delete
        void animalSound();                        // Método
    };

    // Implementação do construtor padrão
    Animal::Animal(string sound) {
        sound_ = sound;
        cout << "Default constructor invoked!" << endl;
    }

    // Implementação do construtor de cópia
    Animal::Animal(const Animal & obj) {
        sound_ = obj.sound_;
        cout << "Copy constructor invoked!" << endl;
    }

    // assignment operator
    Animal & Animal::operator=(const Animal & obj) {
        sound_ = obj.sound_;
        cout << "Assignment constructor invoked!" << endl;

        return *this;
    };

    Animal::~Animal() {
        cout << "Destroyed!" << endl;
    }

    // Implementação do método
    void Animal::animalSound() {
        cout << sound_ << endl;
    }
}

// Corrigido: usando aml::Animal
void foo(aml::Animal animal) {
    // passa por valor → chama construtor de cópia
}

int main() {
    aml::Animal c("Au Au!");
    aml::Animal g("Miau!");

    // copy the animal
    // aml::Animal x = c;

    // transfer the animal
    // aml::Animal &f = c; // referencia 

    // pointer for animal
    aml::Animal *myAnimal = &c; // ponteiro

    cout << "aqui" << endl;
    c = g;
    cout << "aqui" << endl;

    // foo(c);            
    c.animalSound();

    return 0;
}
