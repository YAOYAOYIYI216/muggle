#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a, b;
    printf("请输入两个整数:");
    scanf("%d %d", &a, &b);
    if (a % b)
        puts("b是a的约数");
    else
        puts("b不是a的约数");
    system("pause");
    return 0;
}