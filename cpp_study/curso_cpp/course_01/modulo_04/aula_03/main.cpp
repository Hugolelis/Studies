#include <iostream>

using namespace std;

template <typename T>
T maxType(T a, T b) {
    if(a > b) { return a; }

    return b;
}

int main() {
    cout << "O maior valor é " << maxType(3, 7) << endl;    
    cout << "O maior valor é " << maxType('a', 'd') << endl;
    cout << "O maior valor é " << maxType(string("Hello"), string("World")) << endl;

    return 0;
}