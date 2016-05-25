; Problem 2

(define even-fib-numbers
	(lambda ()
		(let loop ([prev 2] [sum 2] [current 3] [limit 4000000])
			(cond
				((> current limit) sum)
				((= 0 (mod current 2)) (loop current (+ sum current) (+ current prev) limit))
				(else (loop current sum (+ current prev) limit))))))