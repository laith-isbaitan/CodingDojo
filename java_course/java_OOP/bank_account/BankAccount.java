package java_course.java_OOP.bank_account;

import java.util.Random;

public class BankAccount {
    private double checking_balance;
    private double saving_balance;
    public static int num_of_account_created;
    public static double total_money;
    private String acount_number;

    public BankAccount(double checking_balance, double saving_balance) {
        this.checking_balance = checking_balance;
        this.saving_balance = saving_balance;
        this.num_of_account_created++;
        this.acount_number=acount_num();
    }

    public void deposit(String account,double money){
        if(account=="saving"){
            saving_balance=getSaving_balance()+money;
        }else if(account=="checking"){
            checking_balance=getChecking_balance()+money;
        }
    }
    public double withdraw(String account,double amount){
        if(account=="saving"){
            if(getSaving_balance()-amount<0){
                System.out.println("insufficient funds");
            }else{
                saving_balance=getSaving_balance()-amount;
            }
            return getSaving_balance();
        }else if(account=="checking"){
            if(getChecking_balance()-amount<0){
                System.out.println("insufficient funds");
            }else{
                checking_balance=getChecking_balance()-amount;
            }
            return getChecking_balance();
        }
        return 0.0;
    }

    public void display_accounts(){
        System.out.println("checking balance: "+getChecking_balance());
        System.out.println("saving balance: "+getSaving_balance());
    }

    private String acount_num(){
        String num="";
        Random rand = new Random();
        for (int i = 0; i < 10; i++) {
            num+=rand.nextInt(10);
        }
        return num;
    }
    //getters and setters
    public double getChecking_balance() {
        return checking_balance;
    }

    public double getSaving_balance() {
        return saving_balance;
    }

    
}
