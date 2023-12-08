import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class FReader
{
	public static void main(String arg[]) throws IOException, FileNotFoundException
	{
		FileReader fr    =   new FileReader("./sample.txt");
		int ascii;
		char ch;

		ascii	=	fr.read();

		while (ascii!=-1)
		{
			ch		=	(char)ascii;
			System.out.print(ch);

			ascii	=	fr.read();
		}

		fr.close();

	}
}
