#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a, b;
    printf("��������������:");
    scanf("%d %d", &a, &b);
    if (a % b)
        puts("b��a��Լ��");
    else
        puts("b����a��Լ��");
    system("pause");
    return 0;
}