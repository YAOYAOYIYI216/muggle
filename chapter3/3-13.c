#include <stdio.h>
#include <windows.h>
int main(void)
{
    int month;
    printf("请输入月份:");
    scanf("%d", &month);
    switch (month)
    {
    case 1:
        printf("%d月为春天\n", month);
        break;
    case 2:
        printf("%d月为春天\n", month);
        break;
    case 3:
        printf("%d月为春天\n", month);
        break;
    case 4:
        printf("%d月为夏天\n", month);
        break;
    case 5:
        printf("%d月为夏天\n", month);
        break;
    case 6:
        printf("%d月为夏天\n", month);
        break;
    case 7:
        printf("%d月为秋天\n", month);
        break;
    case 8:
        printf("%d月为秋天\n", month);
        break;
    case 9:
        printf("%d月为秋天\n", month);
        break;
    case 10:
        printf("%d月为冬天\n", month);
        break;
    case 11:
        printf("%d月为冬天\n", month);
        break;
    case 12:
        printf("%d月为冬天\n", month);
        break;
    default:
        printf("%d月不存在\n", month);
        break;
    }
    system("pause");
    return 0;
}