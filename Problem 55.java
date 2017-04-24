import java.math.BigInteger;

public class Problem55 {

	public static void main(String[] args) {
		int count = 0;
		for (int x = 1; x < 10000; x++) {
			System.out.println(x);
			BigInteger temp = new BigInteger(Integer.toString(x));
			if (isLychrel(temp, 0)) {
				count++;
			}
		}
		
		System.out.println(count);
	}

	public static boolean isLychrel(BigInteger num, int count) {
		if (count >= 50) return true;
		
		String numString = num.toString();
		String reverseString = "";
		for (int x = numString.length() - 1; x >= 0; x--) {
			reverseString += numString.charAt(x);
		}
		
		BigInteger newNum = num.add(new BigInteger(reverseString));
		String newNumString = newNum.toString();
		String newNumStringReverse = "";
		for (int x = newNumString.length() - 1; x >= 0; x--) {
			newNumStringReverse += newNumString.charAt(x);
		}
		
		if (newNumString.equals(newNumStringReverse)) {
			return false;
		}
		
		return isLychrel(newNum, count + 1);
	}
}