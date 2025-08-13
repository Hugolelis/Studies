#include <vector>
#include <iostream>

using namespace std;

int main() {
    vector<int> v;

    v.push_back(1);
    v.push_back(2);
    v.push_back(5);

    cout << v[0] << endl;
    cout << v[1] << endl;
    cout << v[2] << endl;

    cout << v.size() << endl;

    return 0;
}