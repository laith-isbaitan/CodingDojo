package java_course.java_fundamentals.cafe_java;

public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double colaPrice = 3;
        double juicePrice = 2.5;
        double coffeePrice = 5;

    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Jimmy";
        String customer3 = "Noah";
        String customer4 = "Sam";

    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;

    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"        
    	// ** Your customer interaction print statements will go here ** //
        System.out.println(customer1 + ": i want coffe");
        System.out.println(customer1 + pendingMessage);
        System.out.println(readyMessage+ displayTotalMessage+ coffeePrice);

        if(isReadyOrder3){
            System.out.println(customer3+displayTotalMessage+juicePrice);
        }else{
            System.out.println(customer3+pendingMessage);
        }
        if(isReadyOrder4){
            double sams_total=colaPrice*2;
            System.out.println(customer4+displayTotalMessage+sams_total);
        }else{
            System.out.println(customer4+pendingMessage);
        }
        System.out.println(customer2+displayTotalMessage+(coffeePrice-juicePrice));
    }
}