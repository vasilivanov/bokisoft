package com.bokisoft.testwebapp;

import org.testng.annotations.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class MainTest {

   @Test
   public void testMain() {
      List<String> strings = Arrays.asList("1234", "abcd");
      strings.stream().forEach(this::update);

      int[] intArray = {1, 2, 3, 4, 5};

      // 1. Arrays.stream -> IntStream
      IntStream intStream1 = Arrays.stream(intArray);
      intStream1.forEach(x -> System.out.println(x));

      // 2. Stream.of -> Stream<int[]>
      Stream<int[]> temp = Stream.of(intArray);

      // Cant print Stream<int[]> directly, convert / flat it to IntStream
      IntStream intStream2 = temp.flatMapToInt(x -> Arrays.stream(x));
      intStream2.forEach(x -> System.out.println(x));
   }

   private void update(Object t) {
      System.out.println("Updating object: " + t.toString());
   }
}
