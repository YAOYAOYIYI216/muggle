#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a, b;
    printf("请输入两个整数:");
    scanf("%d %d", &a, &b);
    if (a > b)
        printf("它们的差是%d\n", a - b);
    else
        printf("它们的差是%d\n", b - a);
    system("pause");
    return 0;
}