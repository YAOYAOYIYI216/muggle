#include <stdio.h>
#include <windows.h>
int main(void)
{
    int no;
    printf("������һ������:");
    scanf("%d", &no);

    switch (no % 2)
    {
    case 0:
        printf("����Ϊż��\n");
        break;
    case 1:
        printf("����Ϊ����\n");
        break;
    }
    system("pause");
    return 0;
}