#include <stdio.h>
#include <windows.h>
int t(int year)
{
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
    {
        return 1;
    }
    else
    {
        return 0; 
    }
}

int j(int month, int year)
{
    int days[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    if (month == 2 && t(year))
    {
        return 29; 
    }
    else
    {
        return days[month];
    }
}

int main()
{
    int year, month, day;

    while (scanf("%d/%d/%d", &year, &month, &day) )
    {
        int k = 0;

        for (int i = 1; i < month; i++)
        {
            k += j(i, year);
        }

        k += day;

        printf("%d\n", k);
    }
    system("pause");
    return 0;
}
