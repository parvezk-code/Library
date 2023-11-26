

// strlen(s1),       strcat(s1, s2),   
// strcpy(s1, s2),   strcmp(s1, s2)

#include <stdio.h>
#include <string.h>
 
int main() 
{
  char str1[20] = "Hello ";
  char str2[] = "World!";
 
  int len 	=	strlen(str1);
  printf("%d ", len);
  
  // str1 = str1 + str2
  strcat(str1, str2);
  printf("%s \n", str1);
  
  
  strcpy(str1, str2);
  printf("%s \n", str1);
  
  printf("%d\n", strcmp(str1, str2));
 
  return 0;
}


