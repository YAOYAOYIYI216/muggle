#include <stdio.h>
#include <windows.h>
int main()
{
    int num1, num2;

    printf("������������������");
    scanf("%d %d", &num1, &num2);

    if (num1 <= 0 || num2 <= 0)
    {
        printf("��������������\n");
        return 1;
    }

    while (num2 != 0)
    {
        int t = num2;
        num2 = num1 % num2;
        num1 = t;
    }

    printf("��������ǣ�%d\n", num1);
    system("pause");
    return 0;
}
