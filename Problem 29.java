import java.math.BigInteger;
import java.util.Set;
import java.util.TreeSet;

public class Problem29 {
	public static void main(String[] args) {
		Set<String> numbers = new TreeSet<String>();
		
		for (int x = 2; x <= 100; x++) {
			for (int y = 2; y <= 100; y++) {
				BigInteger xx = new BigInteger(Integer.toString(x));
				numbers.add(xx.pow(y).toString());
			}
		}
		
		System.out.println(numbers.size());
	}
}
