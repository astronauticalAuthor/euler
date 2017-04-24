import java.math.BigInteger;

public class Problem97 {

	public static void main(String[] args) {
		BigInteger nonmersenne = new BigInteger("2");
		nonmersenne = nonmersenne.pow(7830457);
		nonmersenne = nonmersenne.multiply(new BigInteger("28433"));
		nonmersenne = nonmersenne.add(BigInteger.ONE);
		
		String digits = nonmersenne.toString();
		for (int x = digits.length() - 11; x < digits.length(); x++) {
			System.out.print(digits.charAt(x));
		}
		
	}

}
