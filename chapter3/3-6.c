#include <stdio.h>
#include <windows.h>
int main(void)
{
    int a, b, c, min;
    printf("��������������:");
    scanf("%d %d %d", &a, &b, &c);
    min = a;
    if (b < min)
        min = b;
    if (c < min)
        min = c;
    printf("���������е���Сֵ��%d\n", min);
    system("pause");
    return 0;
}