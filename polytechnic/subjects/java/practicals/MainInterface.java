interface Shape
{
	//implicitly public, static and final
	public String LABLE    =   "Shape";

	//interface methods are implicitly abstract and public
	int getArea();
}

class Rectangle implements Shape
{
    int height, width;

    public int getArea()
    {
        int area = height * width;
        return(area);
    }
}

public class MainInterface
{
    public static void main(String[] args)
    {
        // Shape s1   =   new Shape();

        Rectangle r1   =   new Rectangle();

    }
}

