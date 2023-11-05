#include <stdio.h>
#include <windows.h>
int main()
{
    int n;

    while (1)
    {
        scanf("%d", &n);

        if (n == 0)
        {
            break;
        }

        int t = 1;

        for (int i = 0; i < n; i++)
        {
            int num;
            scanf("%d", &num);

            if (num % 2 != 0)
            {
                t *= num;
            }
        }

        printf("%d\n", t);
    }
    system("pause");
    return 0;
}
