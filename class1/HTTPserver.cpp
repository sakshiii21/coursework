#include <stdlib.h>
#include<iostream>
#include<string>
using namespace std;
//Browser requests /hello → your C++ server responds with Hello World.
string responser(string req){
    if(req=="/hello") return "Hello World";
    else return "error unrecognizable path";
}
int main(){
    cout<<responser("/hello");
}
