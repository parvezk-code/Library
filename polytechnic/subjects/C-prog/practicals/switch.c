#include<stdio.h>

int main()
{

	int day;

	day = 2;		// scanf("%d", &day);

	switch(day)
	{
			case 1:
			{
				printf("Monday");
				break;
			}
			case 2:
			{
				printf("Tuesday");
				break;
			}
			case 3:
			{
				printf("Wednesday");
				break;
			}
			default:
			{
				printf("Error");
				break;
			}
	}
	return(0);
}
