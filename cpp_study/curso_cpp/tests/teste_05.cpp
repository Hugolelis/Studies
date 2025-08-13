#include <iostream>

using namespace std;

int main() {
    int i = 0, j = 1;
    cout << i << endl;
    int *ptr = &i;

    i = 2;
    cout << i << endl;
    *ptr = 3;
    ptr = &j;
    cout << i << endl;
    j = i;
    *ptr = 4;
    cout << *ptr << endl;
    cout << i << endl;

    return 0;
}

