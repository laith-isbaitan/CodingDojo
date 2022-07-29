package java_course.alfred_bot;
import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return String.format("Hello %s , lovely to see you. How are you?",name);
    }
    public String guestGreeting(String name , String dayPeriod) {
        // YOUR CODE HERE
        return String.format("Good %s %s , lovely to see you. How are you?",dayPeriod,name);
    }
    
    public String dateAnnouncement() {
        // YOUR CODE HERE
        Date date = new Date();
        return String.format("it is currently %1s",date);
    }
    
    public String respondBeforeAlexis(String conversation) {
        // YOUR CODE HERE
        if(conversation.indexOf("Alexis") != -1){
            return "Right away, sir. She certainly isn't sophisticated enough for that.";
        }else if(conversation.indexOf("Alfred") !=-1){
            return "At your service. As you wish, naturally.";
        }else{
            return "Right. And with that I shall retire.";
        }
    }

    public String alfred_panic(String enemy){
        if(enemy.equals("joker")){
            return "oh nooooooooooo!";
        }else{
            return "Alexis you can handle this";
        }
    }
    
	// NINJA BONUS
	// See the specs to overload the guessGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}
