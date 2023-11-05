#include <stdio.h>
#include <windows.h>
int main()
{
    double a, b, c;

    printf("请输入三个实数：");
    scanf("%lf %lf %lf", &a, &b, &c);

    if (a + b > c && a + c > b && b + c > a)
    {
        if (a == b && b == c)
        {
            printf("1 - 正三角形\n");
        }
        else if (a == b || a == c || b == c)
        {
            printf("2 - 等腰三角形\n");
        }
        else
        {
            printf("3 - 任意三角形\n");
        }
    }
    else
    {
        printf("0 - 不能构成三角形\n");
    }
    system("pause");
    return 0;

}
