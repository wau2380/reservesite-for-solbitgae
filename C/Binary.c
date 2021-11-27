#include <stdio.h>
int transform(int n, int k)
{ // n진수 변환 함수
    if (n < k)
        return 0;
    return transform(n / k, k);
}

int main()
{

    int n, k;

    scanf("%d %d", &n, &k); // n number , k 진수

    transform(n, k);

    printf("%d, %d", n, k);

    return 0;
}