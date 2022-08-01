package java_course.java_OOP.coffeedore64;

public class items {
    private int index;
    private String name;
    private double price;

    public items(int index,String name, double price) {
        this.index=index;
        this.name = name;
        this.price = price;
    }
    

    public String getName() {
        return name;
    }
    public double getPrice() {
        return price;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setPrice(double price) {
        this.price = price;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    
}
