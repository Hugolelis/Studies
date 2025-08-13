#include <iostream>

int reference_count = 0;

class Track {
public:
    Track() { reference_count++; }
    ~Track() { reference_count--; }
};

std::string track_stuff() {
    Track t;
    Track *p = new Track;
    // ...
    delete p;
    return "Ação executada";
}

int main() {
    std::cout << track_stuff() << std::endl;
    return 0;
}