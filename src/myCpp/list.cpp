#include <iostream>
#include <list>
// /usr/local/Cellar/gcc/8.1.0/bin/c++-8 list.cpp -o prog
int main ()
{
  int myints[] = {1, 2, 3, 4};
  std::list<int> mylist (myints,myints+4);

  std::cout << "mylist contains:";
  for (std::list<int>::iterator it=mylist.begin(); it != mylist.end(); ++it)
    std::cout << ' ' << *it;

  std::cout << '\n';

  std::cout << "the first element is " << *mylist.begin() << std::endl;

  std::cout << "the last element is " << *mylist.end() << std::endl;

  return 0;
}