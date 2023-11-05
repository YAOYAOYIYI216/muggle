#include <stdio.h>
#include <windows.h>
int main()
{
    int n, m;

    while (scanf("%d %d", &n, &m) )
    {
        int scores[n][m];

        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                scanf("%d", &scores[i][j]);
            }
        }

        double studentAverage[n];
        double subjectAverage[m];

        for (int i = 0; i < n; i++)
        {
            double sum = 0;
            for (int j = 0; j < m; j++)
            {
                sum += scores[i][j];
            }
            studentAverage[i] = sum / m;
        }

        for (int j = 0; j < m; j++)
        {
            double sum = 0;
            for (int i = 0; i < n; i++)
            {
                sum += scores[i][j];
            }
            subjectAverage[j] = sum / n;
        }

        int count = 0;
        for (int i = 0; i < n; i++)
        {
            int a = 1;
            for (int j = 0; j < m; j++)
            {
                if (scores[i][j] < subjectAverage[j])
                {
                    a = 0;
                    break;
                }
            }
            if (a == 1)
            {
                count++;
            }
        }

        for (int i = 0; i < n; i++)
        {
            printf("%.2f ", studentAverage[i]);
        }
        printf("\n");

        for (int j = 0; j < m; j++)
        {
            printf("%.2f ", subjectAverage[j]);
        }
        printf("\n");
        printf("%d\n\n", count);
    }
    system("pause");
    return 0;
}
