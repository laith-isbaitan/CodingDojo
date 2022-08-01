package java_course.java_fundamentals.puzzling;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Random;

public class puzzleJava {

    public ArrayList<Integer> getTenRolls() {
        ArrayList<Integer> arr= new ArrayList<>();
        Random randMachine = new Random();
        int rand=0;
        for (int i = 0; i < 10; i++) {
            rand=randMachine.nextInt(11-1)+1;
            arr.add(rand);
        }
        return arr;
    }

    public char getRandomLetter(){
        char[] letters = {'a','b','c','d','e',
                        'f','g','h','i','j','k','l',
                        'm','n','o','p','q','r','s',
                        't','u','v','w','x','y','z'};
        Random randMachine = new Random();
        int rand=randMachine.nextInt(26);
        return letters[rand];
    }
    

    public String generatepass(){
        String pass="";
        for (int i = 0; i < 8; i++) {
            pass+=getRandomLetter();
        }
        return pass;
    }

    public String[] getNewPassSet(int size){
        String[] passArray=new String[size];
        for (int i = 0; i < passArray.length; i++) {
            passArray[i]=generatepass();
        }
        return passArray;
    }

    public String[] shuffleArray(String[] arr){
        Random randMachine = new Random();
        for (int i = 0; i < arr.length; i++) {
            int rand=randMachine.nextInt(arr.length);
            String temp=arr[i];
            arr[i]=arr[rand];
            arr[rand]=temp;
        }
        return arr;
    }
}
