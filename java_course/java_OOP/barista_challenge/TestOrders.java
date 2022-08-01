package java_course.java_OOP.barista_challenge;

// import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
        order order1=new order();
        order order2=new order();

        order order3=new order("laith");
        order order4=new order("omar");
        order order5=new order("awni");

        item item1 =new item("coffee", 2.5);
        item item2 =new item("juice", 0.5);
        item item3 =new item("water", 1.0);
        item item4 =new item("moca", 3.0);

        order1.addItem(item1);
        order1.addItem(item2);

        order2.addItem(item3);
        order2.addItem(item4);

        order3.addItem(item1);
        order3.addItem(item3);

        order4.addItem(item2);
        order4.addItem(item4);

        order5.addItem(item1);
        order5.addItem(item4);

        order1.display();
        order2.setReady(true);
        System.out.println(order2.getStatusMessage());
    }
}