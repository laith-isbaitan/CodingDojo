package java_course.java_OOP.coffeedore64;

import java.util.ArrayList;

public class order {
    private String name;
    public double total;
    private boolean ready;
    private ArrayList<items> items;

    public order() {
        this.name = "Guest";
        this.items = new ArrayList<>();
    }

    public order(String name){
        this.name=name;
        this.items = new ArrayList<>();
    }

    public void addItem(items item){
        getItems().add(item);
    }

    public String getStatusMessage(){
        if(isReady()){
            return "Your order is ready.";
        }else{
            return "Thank you for waiting. Your order will be ready soon.";
        }
    }

    public void display(){
        System.out.println("Customer Name: "+getName());
        for (items item : items) {
            System.out.println(item.getName()+" "+item.getPrice());
        }
        System.out.println("Total: "+getOrderTotal());
    }

    public double getOrderTotal(){
        double total=0;
        for (items item : getItems()) {
            total+=item.getPrice();
        }
        return total;
    }
    //getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public boolean isReady() {
        return ready;
    }

    public void setReady(boolean ready) {
        this.ready = ready;
    }

    public ArrayList<items> getItems() {
        return items;
    }

    public void setItems(ArrayList<items> items) {
        this.items = items;
    }

    
}
