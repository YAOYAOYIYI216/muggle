#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a, b, c;
    printf("��������������:");
    scanf("%d %d %d", &a, &b, &c);
    if (a == b && b == c)
        printf("���������\n");
    else if (a == b || b == c || a == c)
        printf("�����������\n");
    else
        printf("����ֵ������ͬ\n");
    system("pause");
    return 0;
}