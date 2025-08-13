#include <iostream>

using namespace std;

int main() {
    int *x = new int;
    int &y = *x;

    y = 4;

    cout << &x << endl;
    cout << x << endl;
    cout << *x << endl;


    cout << &y << endl;
    cout << y << endl;
    // erro -> cout << *y << endl;

    return 0;
};