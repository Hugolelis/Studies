#include <vector>
#include <iostream>

using namespace std;

int main() {
    vector<int> v;

    for(int i = 0; i < 100; i++) {
        v.push_back(i * i);
    }

    cout << v[12] << endl;

    return 0;
}