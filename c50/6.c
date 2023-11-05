#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

int compare(const void *a, const void *b)
{
    return abs(*(int *)b) - abs(*(int *)a);
}

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

        int numbers[n];

        for (int i = 0; i < n; i++)
        {
            scanf("%d", &numbers[i]);
        }

        
        qsort(numbers, n, sizeof(int), compare);

        for (int i = 0; i < n; i++)
        {
            printf("%d", numbers[i]);

            if (i < n - 1)
            {
                printf(" ");
            }
        }

        printf("\n");
    }
    system("pause");
    return 0;
}
