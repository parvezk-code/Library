//  mode(r, w, a)  fopen, fclose, fgets, fprintf

#include<stdio.h>

int main()
{
		FILE *filePtr = fopen("./apple.txt", "w");

		fprintf(filePtr, "my name is ravi \n");

		fprintf(filePtr, "my city bhopal");

		fclose(filePtr);

		return(0);
}


