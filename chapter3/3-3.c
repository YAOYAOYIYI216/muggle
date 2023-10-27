#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a;
    printf("请输入一个整数:");
    scanf("%d", &a);
    if (a >= 0)
        printf("绝对值是%d\n", a);
    else
        printf("绝对值是%d\n", -a);
    system("pause");
    return 0;
}