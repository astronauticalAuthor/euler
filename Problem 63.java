import java.math.BigInteger;

public class Problem63 {

	public static void main(String[] args) {
		int count = 0;
		for (int x = 1; x <= 100; x++) {
			for (int y = 1; y <= 100; y++) {
				BigInteger temp = new BigInteger(Integer.toString(x));
				temp = temp.pow(y);
				if (temp.toString().length() == y) {
					count++;
				}
			}
		}
		
		System.out.println(count);
	}

}
