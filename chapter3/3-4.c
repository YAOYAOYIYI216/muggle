#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a, b;

    printf("请输入两个整数\n");

    printf("整数A:");
    scanf("%d", &a);

    printf("整数B:");
    scanf("%d", &b);

    if (a == b)
        puts("A与B相等");
    else if (a > b)
        puts("A大于B");
    else if (a < b)
        puts("A小于B");

    system("pause");
    return 0;
}