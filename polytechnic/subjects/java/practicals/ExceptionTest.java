import java.io.*;

public class ExceptionTest 
{
	
	public static void readFile()
	{
		try 
		{
			FileReader fr    =   new FileReader("./apple.txt");
		} 
		catch(FileNotFoundException e) 
		{
			System.out.println(e.getMessage());
		}
		finally
		{
			System.out.println("Finally is always executed");
		}
	}
	
	public static void readFile1() throws FileNotFoundException
	{
		FileReader fr    =   new FileReader("./apple.txt");	
	}

	public static void main(String args[]) 
	{
		// readFile();
		// readFile1();
	}
}
