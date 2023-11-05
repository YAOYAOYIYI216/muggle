#include <stdio.h>
#include <windows.h>
int main()
{
    int n;
    while (1)
    {
        scanf("%d", &n);

        if (n <= 2)
        {
            break;
        }

        int scores[n];

        for (int i = 0; i < n; i++)
        {
            scanf("%d", &scores[i]);
        }

        int max = 0;
        int min = 0;

        for (int i = 1; i < n; i++)
        {
            if (scores[i] > scores[max])
            {
                max = i;
            }
            else if (scores[i] < scores[min])
            {
                min = i;
            }
        }

        double sum = 0;
        for (int i = 0; i < n; i++)
        {
            if (i != max && i != min)
            {
                sum += scores[i];
            }
        }

       
        double average = sum / (n - 2);
        printf("%.2f\n", average);
    }
    system("pause");
    return 0;
}
