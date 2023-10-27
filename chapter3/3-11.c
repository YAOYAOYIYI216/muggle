#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a, b, dv;
    printf("请输入两个整数:");
    scanf("%d %d", &a, &b);
    if (a > b)
        dv = a - b;
    else
        dv = b - a;
    if (dv < 10 || dv == 10)
        printf("两个数的差小于等于10\n");
    else
        printf("两个数的差大于10\n");
    system("pause");
    return 0;
}