package java_course.puzzling;

import java.util.ArrayList;

public class testPuzzle {
    public static void main(String[] args) {
        puzzleJava generator = new puzzleJava();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);

        char letter=generator.getRandomLetter();
        System.out.println(letter);

        String pass=generator.generatepass();
        System.out.println(pass);

        String[] passArr=generator.getNewPassSet(5);
        for (String string : passArr) {
            System.out.println(string);
        }
        System.out.println("after shuffle");

        String[] shuffled =generator.shuffleArray(passArr);
        for (String string2 : shuffled) {
            System.out.println(string2);
        }
    }
}
