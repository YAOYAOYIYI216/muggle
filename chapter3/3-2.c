#include <stdio.h>
#include <windows.h>
int main(void)
{
    int no;

    printf("请输入一个整数:");
    scanf("%d", &no);

    if (no == 0)
        puts("该整数为0.");
    else if (no > 0)
        puts("该整数>0");
    else if (no < 0)
        puts("该整数<0");

    system("pause");
    return 0;
}