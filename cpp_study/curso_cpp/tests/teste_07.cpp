#include <iostream>
#include <vector>

int main() {
    std::vector<int> v;
    std::cout << v.capacity() << "\n";
    std::cout << v.size() << "\n";

    v.resize(1);
    std::cout << v.capacity() << "\n";
    std::cout << v.size() << "\n";

    v[0] = 5;
    v.push_back(10);
    std::cout << v.capacity() << "\n";
    std::cout << v.size() << "\n";

    for(int i : v) {
        std::cout << i << " ";
    }

    return 0;
}