#include <stdio.h>
#include <windows.h>
int main()
{
    double a, b, c;

    printf("����������ʵ����");
    scanf("%lf %lf %lf", &a, &b, &c);

    if (a + b > c && a + c > b && b + c > a)
    {
        if (a == b && b == c)
        {
            printf("1 - ��������\n");
        }
        else if (a == b || a == c || b == c)
        {
            printf("2 - ����������\n");
        }
        else
        {
            printf("3 - ����������\n");
        }
    }
    else
    {
        printf("0 - ���ܹ���������\n");
    }
    system("pause");
    return 0;

}
