//  mode(r, w, a)  fopen, fclose, fgets, fprintf

#include<stdio.h>

int main()
{
		char strLine[100];
		char *linePtr;
		FILE *filePtr;

		filePtr		=	fopen("./apple.txt", "r");
		linePtr 	= 	fgets(strLine, 100, filePtr);


		while(linePtr)
		{
			printf("%s", strLine);
			linePtr = fgets(strLine, 100, filePtr);
		}


		fclose(filePtr);

		return(0);
}



