#include <iostream>

using namespace std;

int *allocate_an_integer() {
    int *i = new int;
    *i = 0;
    return i;
};

int main() {

    cout << *allocate_an_integer() << endl;

    return 0;
};




