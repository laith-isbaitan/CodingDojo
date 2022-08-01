package java_course.java_OOP.orders_and_items;

// import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
        item item1=new item();
        item1.name="drip coffee";
        item1.price=3.5;

        item item2=new item();
        item2.name="cappucino";
        item2.price=4.5;

        item item3=new item();
        item3.name="latte";
        item3.price=5.5;

        item item4=new item();
        item4.name="mocha";
        item4.price=7.0;

        // Order variables -- order1, order2 etc.
        order order1 = new order();
        order1.name = "cindhuri";
        System.out.println(order1);

        order order2 = new order();
        order2.name = "jimmy";

        
        order order3 = new order();
        order3.name = "noah";


        order order4 = new order();
        order4.name = "sam";


        order2.items.add(item1);
        order2.total+=item1.price;
        order3.items.add(item2);
        order3.total+=item2.price;
        order4.items.add(item3);
        order1.ready=true;
        order4.items.add(item3);
        order4.items.add(item3);
        order2.ready=true;
        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);
    }
}