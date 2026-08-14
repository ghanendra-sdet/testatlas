---
title: "Java Programming & Coding Interview Questions"
sidebar_label: "05 Java Programming"
description: "Master 50 Java basics questions and study 20 essential Java coding examples commonly asked in SDET and automation engineer interviews."
keywords: ["java programming interview questions", "java coding exercises QA", "java collections", "exception handling java", "sdet coding questions"]
difficulty: "intermediate"
time_to_read: "24 min"
last_reviewed: "2026-08-12"
---

# Java Programming & Coding Interview Questions

This Q&A bank contains 50 questions on core Java syntax, collections, OOP, exception handling, and 20 works-out coding examples commonly asked during SDET technical loops.

Use the details tags to toggle responses.

---

## Java Programming Basics

<details>
<summary><b>Q1: What is Java, and why is it used in automation testing?</b></summary>

Java is a high-level, object-oriented programming language. It is popular in automation because of its platform independence (runs anywhere with a JVM), rich ecosystem of libraries (Selenium, RestAssured), and robust parallel threads support.
</details>

<details>
<summary><b>Q2: What is the difference between JDK, JRE, and JVM?</b></summary>

- **JDK (Java Development Kit)**: Developer tools (including compiler `javac`) and JRE.
- **JRE (Java Runtime Environment)**: Libraries and JVM to execute compiled Java.
- **JVM (Java Virtual Machine)**: Converts bytecode to machine code during execution.
</details>

<details>
<summary><b>Q3: What are Java Data Types, and how are they used in test automation?</b></summary>

Java supports:
- **Primitives**: `int` (for counts), `boolean` (for assertion states), `double` (for prices), `char`.
- **References**: `String` (for element texts), classes, arrays.
</details>

<details>
<summary><b>Q4: What is the difference between primitive and reference data types?</b></summary>

- **Primitive** data types store the value directly in memory stack.
- **Reference** data types store the memory address of the object in heap storage.
</details>

<details>
<summary><b>Q5: What are Java Operators?</b></summary>

Operators are symbols used to perform operations (e.g. arithmetic `+`, relational `==`, logical `&&`, and assignment `=`).
</details>

<details>
<summary><b>Q6: Explain Conditional Statements in Java.</b></summary>

Conditional statements check logic flows:
- `if-else`
- `switch-case`
</details>

<details>
<summary><b>Q7: What is the difference between if-else and switch-case?</b></summary>

- `if-else` handles range checks and complex boolean statements.
- `switch-case` checks equality against specific constant values (e.g., matching browser name inputs).
</details>

<details>
<summary><b>Q8: What are Loops in Java, and how are they used in QA?</b></summary>

Loops repeat actions:
- `for` (when runs are predetermined).
- `while` (repeats while conditions hold true).
- `do-while` (runs once before checking conditions).
</details>

<details>
<summary><b>Q9: Difference between break and continue in loops?</b></summary>

- `break` exits the loop immediately.
- `continue` skips the current iteration and jumps to the next loop evaluation.
</details>

<details>
<summary><b>Q10: What is an Array in Java?</b></summary>

An array is a fixed-size container that holds elements of a single data type. Example: `String[] browsers = {"Chrome", "Firefox"};`.
</details>

<details>
<summary><b>Q11: Difference between Array and ArrayList in Java?</b></summary>

- **Array**: Fixed-size structure.
- **ArrayList**: Dynamic-size collection that can grow and shrink dynamically as elements are added.
</details>

<details>
<summary><b>Q12: What is a String in Java, and why is it immutable?</b></summary>

A String represents characters. It is immutable, meaning its state cannot be updated after creation; modifications create new String instances in the String Pool to optimize memory.
</details>

<details>
<summary><b>Q13: Difference between String, StringBuilder, and StringBuffer?</b></summary>

- `String` is immutable.
- `StringBuilder` is mutable, fast, and not thread-safe.
- `StringBuffer` is mutable, thread-safe, but slower.
</details>

<details>
<summary><b>Q14: What is Object-Oriented Programming (OOP) in Java?</b></summary>

OOP is a design paradigm using classes and objects. Its four pillars are: Encapsulation, Inheritance, Polymorphism, and Abstraction.
</details>

<details>
<summary><b>Q15: Explain Encapsulation with an example.</b></summary>

Hiding variables using `private` and exposing access via `public` getter and setter methods to keep fields secure.
</details>

<details>
<summary><b>Q16: Explain Inheritance with an example.</b></summary>

Reusing code by letting one class inherit attributes and methods of another:
`class LoginTest extends BaseTest { ... }`
</details>

<details>
<summary><b>Q17: Explain Polymorphism with examples.</b></summary>

Polymorphism allows methods to take different forms: Overloading (same method name, different args) and Overriding (child updates parent's implementation).
</details>

<details>
<summary><b>Q18: Explain Abstraction with an example.</b></summary>

Hiding execution details and exposing interfaces. For example, using the `WebDriver` interface to define standard browser actions.
</details>

<details>
<summary><b>Q19: Difference between Abstract Class and Interface?</b></summary>

- **Abstract Class** can have concrete methods, variables, and constructors. Supports single inheritance.
- **Interface** only has abstract or default methods, static constants, and supports multiple inheritance.
</details>

<details>
<summary><b>Q20: What is Method Overloading and Overriding?</b></summary>

- **Overloading**: Same name, different arguments (compile-time).
- **Overriding**: Subclass modifies parent class method behavior (runtime).
</details>

<details>
<summary><b>Q21: What is the difference between final, finally, and finalize()?</b></summary>

- `final`: Declares constants, blocks inheritance or overrides.
- `finally`: Block in try-catch executing cleanup.
- `finalize()`: Runs before garbage collection deletes objects.
</details>

<details>
<summary><b>Q22: What is Exception Handling in Java?</b></summary>

An execution mechanism to catch runtime errors (e.g. `NullPointerException`) using `try-catch-finally` blocks.
</details>

<details>
<summary><b>Q23: Difference between Checked and Unchecked Exceptions?</b></summary>

- **Checked**: Compile-time check (e.g. `FileNotFoundException`).
- **Unchecked**: Runtime check (e.g. `ArrayIndexOutOfBoundsException`).
</details>

<details>
<summary><b>Q24: What is a Wrapper Class in Java?</b></summary>

An object representation of primitive types (e.g. `Integer` wrapping `int`), enabling them to be stored in Java collections.
</details>

<details>
<summary><b>Q25: What is Autoboxing and Unboxing?</b></summary>

- **Autoboxing**: Automatic conversion of primitive types to wrapper objects.
- **Unboxing**: Automatic conversion of wrapper objects back to primitive types.
</details>

---

## Collections & Exception Handling

<details>
<summary><b>Q26: What are Collections in Java?</b></summary>

A set of classes and interfaces used to store and manipulate groups of objects (e.g., `List`, `Set`, `Map`).
</details>

<details>
<summary><b>Q27: Difference between List and Set?</b></summary>

- `List` allows duplicate values and maintains insertion order.
- `Set` requires unique values and does not guarantee insertion order.
</details>

<details>
<summary><b>Q28: Difference between HashMap and HashSet?</b></summary>

- `HashMap` stores key-value pairs (maps keys to values).
- `HashSet` stores only unique values.
</details>

<details>
<summary><b>Q29: How to iterate over a Collection?</b></summary>

Use an enhanced `for` loop, or retrieve an `Iterator` and execute:
`while(it.hasNext()) { ... }`
</details>

<details>
<summary><b>Q30: Difference between ArrayList and LinkedList?</b></summary>

- `ArrayList` uses a dynamic array (faster for element lookups).
- `LinkedList` uses a doubly linked list (faster for insertions and deletions).
</details>

<details>
<summary><b>Q31: What is a HashMap in Java?</b></summary>

A collection storing key-value pairs using hashing mechanisms, allowing fast lookups by key.
</details>

<details>
<summary><b>Q32: What is Synchronization in Java?</b></summary>

Controlling thread access to shared resources to prevent data races and ensure thread safety.
</details>

<details>
<summary><b>Q33: How is multi-threading used in automation?</b></summary>

Running test suites concurrently on multiple threads to speed up regression testing runs.
</details>

<details>
<summary><b>Q34: What is the difference between throw and throws?</b></summary>

- `throw` triggers an exception instance in code.
- `throws` declares potential exceptions on the method signature.
</details>

<details>
<summary><b>Q35: What is the difference between == and .equals()?</b></summary>

- `==` compares references.
- `.equals()` compares content values.
</details>

<details>
<summary><b>Q36: What are Static Methods and Variables?</b></summary>

Fields/methods belonging to the class directly, not instances. Often used for framework utilities.
</details>

<details>
<summary><b>Q37: What are Constructors in Java?</b></summary>

Special methods having the same name as the class, invoked when objects are initialized.
</details>

<details>
<summary><b>Q38: Difference between default and parameterized constructors?</b></summary>

- **Default**: Takes no arguments.
- **Parameterized**: Accepts arguments to initialize instance fields.
</details>

<details>
<summary><b>Q39: What is the ‘this’ keyword in Java?</b></summary>

Refers to the current class instance. Used to resolve conflicts between instance and parameter names.
</details>

<details>
<summary><b>Q40: What is the ‘super’ keyword in Java?</b></summary>

Refers to parent class objects or constructors.
</details>

<details>
<summary><b>Q41: What is File Handling in Java?</b></summary>

The process of reading and writing file data using `FileReader`, `FileWriter`, and `BufferedReader`.
</details>

<details>
<summary><b>Q42: How to read a file in Java?</b></summary>

```java
BufferedReader br = new BufferedReader(new FileReader("file.txt"));
String line;
while ((line = br.readLine()) != null) { ... }
```
</details>

<details>
<summary><b>Q43: How to write into a file in Java?</b></summary>

```java
FileWriter writer = new FileWriter("file.txt");
writer.write("Text");
writer.close();
```
</details>

<details>
<summary><b>Q44: What is Serialization in Java?</b></summary>

Converting an object state into a byte stream for storage or network transfer.
</details>

<details>
<summary><b>Q45: What is Deserialization in Java?</b></summary>

Recreating a Java object in memory from a byte stream.
</details>

<details>
<summary><b>Q46: What are Java Streams?</b></summary>

Introduced in Java 8, streams process sequences of elements in a functional style (e.g. map, filter).
</details>

<details>
<summary><b>Q47: Difference between Lambda Expressions and Anonymous Class?</b></summary>

- **Lambda**: Short syntax representing functional interfaces.
- **Anonymous Class**: Complete inner class definition without names.
</details>

<details>
<summary><b>Q48: How to handle dates in Java?</b></summary>

Use the `java.time` package (e.g., `LocalDate`, `LocalDateTime`).
</details>

<details>
<summary><b>Q49: How to generate random data in Java?</b></summary>

Use the `java.util.Random` class, or `Math.random()`.
</details>

<details>
<summary><b>Q50: How is Java integrated in Selenium Automation?</b></summary>

Java is the language used to write the scripts, and Selenium is the library driving the web browser.
</details>

---

## Essential Java Coding Scenarios

### 1. Reverse a String
```java
public class ReverseString {
    public static void main(String[] args) {
        String str = "Automation";
        String rev = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            rev += str.charAt(i);
        }
        System.out.println("Reversed: " + rev);
    }
}
```

### 2. Check if a String is a Palindrome
```java
public class PalindromeCheck {
    public static void main(String[] args) {
        String str = "madam";
        String rev = new StringBuilder(str).reverse().toString();
        System.out.println(str.equals(rev) ? "Palindrome" : "Not Palindrome");
    }
}
```

### 3. Count Vowels in a String
```java
public class CountVowels {
    public static void main(String[] args) {
        String str = "Quality Assurance";
        int count = 0;
        for (char c : str.toLowerCase().toCharArray()) {
            if ("aeiou".indexOf(c) != -1) count++;
        }
        System.out.println("Vowels: " + count);
    }
}
```

### 4. Swap Two Numbers Without a Temporary Variable
```java
public class SwapNumbers {
    public static void main(String[] args) {
        int a = 5, b = 10;
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.println("a=" + a + ", b=" + b);
    }
}
```

### 5. Find the Factorial of a Number
```java
public class Factorial {
    public static void main(String[] args) {
        int num = 5, fact = 1;
        for (int i = 1; i <= num; i++) {
            fact *= i;
        }
        System.out.println("Factorial: " + fact);
    }
}
```

### 6. Fibonacci Series
```java
public class Fibonacci {
    public static void main(String[] args) {
        int n = 7, a = 0, b = 1;
        System.out.print(a + " " + b);
        for (int i = 2; i < n; i++) {
            int c = a + b;
            System.out.print(" " + c);
            a = b; b = c;
        }
    }
}
```

### 7. Find the Largest Number in an Array
```java
public class LargestInArray {
    public static void main(String[] args) {
        int[] arr = {10, 45, 23, 78, 56};
        int max = arr[0];
        for (int num : arr) {
            if (num > max) max = num;
        }
        System.out.println("Largest: " + max);
    }
}
```

### 8. Reverse an Array
```java
public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
    }
}
```

### 9. Count Words in a String
```java
public class WordCount {
    public static void main(String[] args) {
        String str = "Automation testing with Java";
        String[] words = str.trim().split("\\s+");
        System.out.println("Words: " + words.length);
    }
}
```

### 10. Remove Duplicates from an Array
```java
import java.util.HashSet;

public class RemoveDuplicates {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 4, 4};
        HashSet<Integer> set = new HashSet<>();
        for (int n : arr) set.add(n);
        System.out.println(set);
    }
}
```

### 11. Find Duplicate Elements in an Array
```java
public class FindDuplicates {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 4, 5, 1};
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    System.out.println("Duplicate: " + arr[i]);
                }
            }
        }
    }
}
```

### 12. Check Prime Number
```java
public class PrimeCheck {
    public static void main(String[] args) {
        int num = 13;
        boolean prime = true;
        for (int i = 2; i <= num / 2; i++) {
            if (num % i == 0) { prime = false; break; }
        }
        System.out.println(prime ? "Prime" : "Not Prime");
    }
}
```

### 13. Reverse Words in a Sentence
```java
public class ReverseWords {
    public static void main(String[] args) {
        String str = "I love Java";
        String[] words = str.split(" ");
        for (int i = words.length - 1; i >= 0; i--) {
            System.out.print(words[i] + " ");
        }
    }
}
```

### 14. Check Anagram Strings
```java
import java.util.Arrays;

public class AnagramCheck {
    public static void main(String[] args) {
        String s1 = "listen", s2 = "silent";
        char[] a1 = s1.toCharArray();
        char[] a2 = s2.toCharArray();
        Arrays.sort(a1);
        Arrays.sort(a2);
        System.out.println(Arrays.equals(a1, a2) ? "Anagram" : "Not Anagram");
    }
}
```

### 15. Find the Second Largest Number in an Array
```java
public class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {10, 45, 78, 56};
        int largest = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > largest) {
                second = largest;
                largest = num;
            } else if (num > second && num != largest) {
                second = num;
            }
        }
        System.out.println("Second Largest: " + second);
    }
}
```

### 16. Sum of Digits
```java
public class SumDigits {
    public static void main(String[] args) {
        int num = 12345, sum = 0;
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        System.out.println("Sum: " + sum);
    }
}
```

### 17. Remove White Spaces from a String
```java
public class RemoveSpaces {
    public static void main(String[] args) {
        String str = "  Hello   World  ";
        System.out.println(str.replaceAll("\\s+", ""));
    }
}
```

### 18. Convert String to Integer
```java
public class StringToInt {
    public static void main(String[] args) {
        String s = "123";
        int num = Integer.parseInt(s);
        System.out.println(num + 10);
    }
}
```

### 19. Find the Missing Number in an Array
```java
public class MissingNumber {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5};
        int n = 5, total = n * (n + 1) / 2, sum = 0;
        for (int num : arr) sum += num;
        System.out.println("Missing: " + (total - sum));
    }
}
```

### 20. Read File and Print Content
```java
import java.io.*;

public class ReadFile {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new FileReader("data.txt"));
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
        br.close();
    }
}
```
