#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a, b, c;
    printf("请输入三个整数:");
    scanf("%d %d %d", &a, &b, &c);
    if (a == b && b == c)
        printf("三个数相等\n");
    else if (a == b || b == c || a == c)
        printf("有两个数相等\n");
    else
        printf("三个值各不相同\n");
    system("pause");
    return 0;
}