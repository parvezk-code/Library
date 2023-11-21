


			#include<stdio.h>

			// strlen(s1),       strcat(s1, s2),   
			// strcpy(s1, s2),   strcmp(s1, s2)

			int main()
			{
				char name[] = 	"Cat Dog";
				//   name[] = 	['C', 'a', 't', ' ', 'D','o','g'];
				
				printf("%s ", name);
				
				name[0] = 'B';
				
				printf("%c", name[0]);

				return(0);
			}




