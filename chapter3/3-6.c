#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a, b, c, min;
    printf("请输入三个整数:");
    scanf("%d %d %d", &a, &b, &c);
    min = a;
    if (b < min)
        min = b;
    if (c < min)
        min = c;
    printf("三个整数中的最小值是%d\n", min);
    system("pause");
    return 0;
}