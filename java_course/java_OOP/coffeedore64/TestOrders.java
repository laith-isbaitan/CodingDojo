package java_course.java_OOP.coffeedore64;

// import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {

        CoffeeKiosk shop=new CoffeeKiosk();
        shop.addMenuItem("coffee", 2.5);
        shop.addMenuItem("juice", 0.5);
        shop.addMenuItem("water", 1.0);
        shop.addMenuItem("moca", 3.0);

        shop.newOrder();
    }
}