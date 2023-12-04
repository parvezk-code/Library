
class BlueThread extends Thread
{
		public void run()
		{
				System.out.println("running blue thread");
		}
}


class GreenThread implements Runnable
{
		public void run()
		{
				System.out.println("running green thread");
		}
}

public class UserThread
{
		public static void main(String arg[])
		{
			BlueThread t1	=	new BlueThread();
			t1.start();


			GreenThread t2	=	new GreenThread();
			t2.start();
		}
}
