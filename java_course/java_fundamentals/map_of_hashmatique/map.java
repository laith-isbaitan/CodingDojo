package java_course.java_fundamentals.map_of_hashmatique;

import java.util.HashMap;
import java.util.Set;

import javafx.scene.media.Track;

public class map {
    public static void main(String[] args) {
        HashMap<String,String> trackList = new HashMap<>();
        trackList.put("enemy", " I wake up to the sounds of the silence");
        trackList.put("Smooth Criminal", "As he came into the window Was the sound of a crescendo");
        trackList.put("dancing in the moonlight", "We get it on most every night And when that ol' moon gets so big and bright");
        trackList.put("light switch", "Why you callin' at 11:30 When you only wanna do me dirty?");

        Set<String> keys = trackList.keySet();
        for (String key : keys) {
            System.out.println(key+" : "+trackList.get(key));
        }
    }
}
