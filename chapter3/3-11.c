#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a, b, dv;
    printf("��������������:");
    scanf("%d %d", &a, &b);
    if (a > b)
        dv = a - b;
    else
        dv = b - a;
    if (dv < 10 || dv == 10)
        printf("�������Ĳ�С�ڵ���10\n");
    else
        printf("�������Ĳ����10\n");
    system("pause");
    return 0;
}