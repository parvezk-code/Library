import java.io.InputStreamReader;

public class InputReader
{

   public static void main(String args[]) throws IOException
   {
		InputStreamReader rObj = new InputStreamReader(System.in);
		char ch;

		int ascii	= 	rObj.read();
		ch			=	(char)ascii;

		ascii 		=	System.in.read();
		ch			=	(char)ascii;

		System.out.print(ch);
   }
}
