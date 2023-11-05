#include <stdio.h>
#include <windows.h>
int isPrime(int num)
{
    if (num <= 1)
    {
        return 0;
    }
    for (int i = 2; i * i <= num; i++)
    {
        if (num % i == 0)
        {
            return 0;
        }
    }
    return 1;
}

int main()
{
    int count = 0;
    for (int num = 1; num <= 100; num++)
    {
        if (isPrime(num))
        {
            printf("%d\t", num);
            count++;
            if (count % 5 == 0)
            {
                printf("\n");
            }
        }
    }
    system("pause");
    return 0;
}
