import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class TestCafe {
    public static void main(String[] args) {

    CafeUtil appTest = new CafeUtil();
    	
        /* ============ App Test Cases ============= */
    
        System.out.println("\n----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n\n", appTest.getStreakGoal());
    

        System.out.println("----- Order Total Test-----");
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        System.out.printf("Order total: %s \n\n",appTest.getOrderTotal(lineItems));
        

        System.out.println("----- Display Menu Test-----");
        List<String> loadMenu = Arrays.asList(
            "drip coffee",
            "cappucino",
            "latte",
            "mocha"
        );
        ArrayList<String> menu = new ArrayList<String>();
        menu.addAll(loadMenu);
        System.out.println("items indexes are :\n"+appTest.displayMenu(menu)); 


        System.out.println("\n----- Add Customer Test-----");
        ArrayList<String> customers = new ArrayList<String>();
        // --- Test 4 times ---
        appTest.addCustomer(customers);
        

        System.out.println("\n-----------print price chart--------");
        appTest.printPriceChart("Columbian Coffee Grounds", 2.0, 4);


        System.out.println("\n------------display menu-----------");
        ArrayList<String> items =new ArrayList<>();
        ArrayList<Double> prices =new ArrayList<>();
        items.add("drip coffe");
        items.add("cappucino");
        items.add("latte");
        items.add("mocha");
        prices.add(1.5);
        prices.add(3.5);
        prices.add(4.5);
        prices.add(3.5);

        if(items.size()==prices.size()){
            appTest.diplaymenu(items, prices);
        }else{
            System.out.println("not same size");
        }
    }
}