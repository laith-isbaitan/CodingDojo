package java_course.java_OOP.coffeedore64;

import java.util.ArrayList;

public class CoffeeKiosk {
    public ArrayList<items> menu;
    public ArrayList<order> orders;

    public CoffeeKiosk() {
        this.menu=new ArrayList<>();
        this.orders=new ArrayList<>();
    }

    public void addMenuItem(String itm_name,double itm_price){
        int index=menu.size();
        items itm=new items(index,itm_name, itm_price);
        menu.add(itm);
    }

    public void displayMenu(){
        System.out.println("press -1 for admin");
        for (items items : menu) {
            System.out.println(items.getIndex()+" "+items.getName()+" -- "+items.getPrice());
        }
    }

    public void newOrder(){
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
    
        order order=new order(name);
        displayMenu();
        
        System.out.println("Please enter a menu items index or q to quit:");
        String itemNumber = System.console().readLine();
        if(itemNumber.equals("-1")){
            admin();
        }else{
            while(!itemNumber.equals("q")) {
                System.out.println("Please enter a menu items index or q to quit:");
                itemNumber = System.console().readLine();
                if(!itemNumber.equals("q")){
                    items itm= menu.get(Integer.parseInt(itemNumber));
                    order.addItem(itm);
                }
            }
            order.display();
        }
    }


    public void admin(){
        String itemNumber="";
        while(!itemNumber.equals("q")){
            System.out.println("add NAME of items or q to quit:");
            itemNumber = System.console().readLine();
            String itm_name=itemNumber;
            System.out.println("add PRICE of items or q to quit:");
            itemNumber = System.console().readLine();
            String itm_price=itemNumber;
            if(itm_price!="q"){
                addMenuItem(itm_name, Integer.parseInt(itm_price));
            }
        }

    }
}
