
class BlueThread extends Thread
{
		public void run()
		{
				System.out.println("running blue thread");
		}
}


class Main implements Runnable
{
		public void run()
		{
				System.out.println("running green thread");
		}
}

public class ThreadUser
{
		public static void main(String arg[])
		{
			BlueThread t1	=	new BlueThread();
			t1.start();

			Main obj		=	new Main();
			Thread t3		=	new Thread(obj);
			t3.start();
		}
}
