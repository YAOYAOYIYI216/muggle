#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a;
    printf("������һ������:");
    scanf("%d", &a);
    if (a >= 0)
        printf("����ֵ��%d\n", a);
    else
        printf("����ֵ��%d\n", -a);
    system("pause");
    return 0;
}