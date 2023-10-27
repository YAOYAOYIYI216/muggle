#include <stdio.h>
#include <windows.h>
int main(void)
{
    int no;
    printf("请输入一个整数:");
    scanf("%d", &no);

    switch (no % 2)
    {
    case 0:
        printf("该数为偶数\n");
        break;
    case 1:
        printf("该数为奇数\n");
        break;
    }
    system("pause");
    return 0;
}