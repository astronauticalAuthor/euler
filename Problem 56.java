import java.math.BigInteger;


public class Problem56 {

	public static void main(String[] args) {
		int maximumSum = 0;
		
		for (int x = 1; x < 100; x++) {
			System.out.println(x);
			for (int y = 1; y < 100; y++) {
				BigInteger temp = new BigInteger(Integer.toString(x));
				temp = temp.pow(y);
				int sum = digitSum(temp.toString());
				if (sum > maximumSum) maximumSum = sum;
			}
		}
		
		System.out.println(maximumSum);
	}
	
	public static int digitSum(String string) {
		int sum = 0;
		for (int x = 0; x < string.length(); x++) {
			sum += Integer.parseInt(string.charAt(x) + "");
		}
		
		return sum;
	}

}
