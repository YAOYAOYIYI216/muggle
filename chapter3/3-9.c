#include <stdio.h>
#include <windows.h>
int main(void)
{
    int n1, n2;
    printf("��������������:");
    scanf("%d %d", &n1, &n2);
    (n1 == n2) ? printf("�����������\n") : printf("�������������\n");
    system("pause");
    return 0;
}