#include <iostream>
#include <list>

int main() {
    std::list<std::string> linkedList;

    linkedList.push_back("Olá");
    linkedList.push_back("Mundo");

    for (const auto& str : linkedList) {
        std::cout << str << std::endl;
    }

    return 0;
}