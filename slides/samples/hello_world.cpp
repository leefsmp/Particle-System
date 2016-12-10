#include <stdio.h>

class Test {

  public:

    void sayHello () {

      printf("hello, world! (C++)\n");
    }
};

int main() {

  Test test;

  test.sayHello();

  return 0;
}

