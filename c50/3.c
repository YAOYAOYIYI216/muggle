#include <stdio.h>
#include <windows.h>
int main()
{
    int n = 5; 

    int stars = n;
    int space = 0;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= space; j++)
        {
            printf(" ");
        }

        for (int j = 1; j <= stars; j++)
        {
            printf("*");
        }

        printf("\n");

        if (i < n / 2 + 1)
        {
            space++;
            stars -= 2;
        }
        else
        {
            space--;
            stars += 2;
        }
    }
    system("pause");
    return 0;
}
