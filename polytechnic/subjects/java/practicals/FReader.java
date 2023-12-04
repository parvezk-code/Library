import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class FReader
{
		public static void main(String arg[]) throws IOException, FileNotFoundException
		{
			FileWriter fr    =   new FileReader("./sample.txt");
			int ascii;

			ascii	=	fr.read();

			while (ascii!=-1)
			{
				System.out.print((char)ch);
				ascii	=	fr.read();
			}

			fr.close();

		}
}
