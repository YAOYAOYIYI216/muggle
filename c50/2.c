#include <stdio.h>
#include <windows.h>
int main()
{
    int score1, score2;

    printf("请输入两门课的成绩：");
    scanf("%d %d", &score1, &score2);

    if (score1 < 0 || score1 > 100 || score2 < 0 || score2 > 100)
    {
        printf("it is error.\n");
    }
    else
    {
        int result = 0;

        if (score1 >= 60 && score2 >= 60)
        {
            result = 1;
        }

        switch (result)
        {
        case 0:
            printf("it is not pass.\n");
            break;
        case 1:
            printf("it is pass.\n");
            break;
        }
    }
    system("pause");
    return 0;
}
