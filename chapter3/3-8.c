#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a, b;
    printf("��������������:");
    scanf("%d %d", &a, &b);
    if (a > b)
        printf("���ǵĲ���%d\n", a - b);
    else
        printf("���ǵĲ���%d\n", b - a);
    system("pause");
    return 0;
}