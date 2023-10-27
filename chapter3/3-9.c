#include <stdio.h>
#include <windows.h>
int main(void)
{
    int n1, n2;
    printf("请输入两个整数:");
    scanf("%d %d", &n1, &n2);
    (n1 == n2) ? printf("这两个数相等\n") : printf("这两个数不相等\n");
    system("pause");
    return 0;
}