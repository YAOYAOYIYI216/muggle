#include <stdio.h>
#include <windows.h>
int main(void)
{
    int no;

    printf("������һ������:");
    scanf("%d", &no);

    if (no == 0)
        puts("������Ϊ0.");
    else if (no > 0)
        puts("������>0");
    else if (no < 0)
        puts("������<0");

    system("pause");
    return 0;
}