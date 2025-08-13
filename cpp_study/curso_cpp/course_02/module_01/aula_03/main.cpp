#include <iostream>
#include <queue>

int main() {
    std::queue<std::string> q;

    q.push("Orange");
    q.push("Blue");
    
    std::cout << "First pop(): " << q.front() << std::endl;
    q.pop();

    q.push("Illini");
    
    std::cout << "Second pop(): " << q.front() << std::endl;
    q.pop();

    return 0;
}