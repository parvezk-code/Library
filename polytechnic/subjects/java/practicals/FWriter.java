import java.io.FileWriter;
import java.io.IOException;

public class FWriter
{
		public static void main(String arg[]) throws IOException
		{
			FileWriter fw    =   new FileWriter("./sample.txt");

			fw.write('A');
			fw.write('P');
			fw.write('P');
			fw.write('L');
			fw.write('E');

			fw.close();

		}
}
