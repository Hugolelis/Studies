#include <iostream>
#include <stack>

int main() {
    std::stack<std::string> s;

    s.push("Orange");
    s.push("Blue");
    
    std::cout << "First pop(): " << s.top() << std::endl;
    s.pop();

    s.push("Illini");
    
    std::cout << "Second pop(): " << s.top() << std::endl;
    s.pop();

    return 0;
}