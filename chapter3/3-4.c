#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a, b;

    printf("��������������\n");

    printf("����A:");
    scanf("%d", &a);

    printf("����B:");
    scanf("%d", &b);

    if (a == b)
        puts("A��B���");
    else if (a > b)
        puts("A����B");
    else if (a < b)
        puts("AС��B");

    system("pause");
    return 0;
}