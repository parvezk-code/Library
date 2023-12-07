class BlueThread implements Runnable
{
    public void run()
    {
        System.out.println("running thread using Runnable interface");
    }
}


class GreenThread extends Thread
{
    public void run()
    {
        System.out.println("running thread using Thread class");
    }
}

public class MainThread
{
    public static void main(String[] args)
    {
        BlueThread t1   =   new BlueThread();
        t1.start();


        GreenThread t2  =   new GreenThread();
        t2.start();
    }
}

