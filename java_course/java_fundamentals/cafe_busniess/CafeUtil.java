import java.util.ArrayList;

public class CafeUtil {
    public int getStreakGoal(){
        int weeks=10;
        int sum=0;
        for(int i=1;i<weeks+1;i++){
            sum+=i;
        }
        return sum;
    }

    public double getOrderTotal(double[] items){
        double sum=0;
        for (double item : items) {
            sum+=item;
        }
        return sum;
    }

    public String displayMenu(ArrayList arr){
        String res="";
        for(int i=0;i<arr.size();i++){
            res+=i+" "+arr.get(i)+"\n";
        }
        return res;
    }

    public void addCustomer(ArrayList<String> arr){
        String userName="";
        while(!userName.equalsIgnoreCase("q")){
            System.out.println("press q to quit");
            System.out.println("write your name:");
            userName = System.console().readLine();
            System.out.println("Hello:"+userName+"There are "+arr.size()+" infront of you");
            arr.add(userName);
            System.out.println(arr);
            System.out.println("\n");
        }
    }

    public void printPriceChart(String product, double price, int maxQuantity){
        int i=0;
        System.out.println(product);
        double sum=price;
        while(i<maxQuantity){
            System.out.println((i+1)+"- "+sum);
            sum+=price-0.5;
            i++;
        }
    }

    public void diplaymenu(ArrayList<String> items, ArrayList<Double> prices){
        for(int i=0;i<items.size();i++){
            System.out.println(i+" "+items.get(i)+"--"+prices.get(i));
        }
    }
}

