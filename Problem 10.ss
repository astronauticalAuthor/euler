; Problem 10

(define prime?
	(lambda (n)
		(let loop ([current 2])
			(cond
				((> current (sqrt n)) #t)
				((= 0 (mod n current)) #f)
				(else (loop (+ current 1)))))))

(define summation-of-primes
	(lambda ()
		(let loop ([current 9] [sum 17])
			(display current)
			(newline)
			(cond
				((> current 2000000) sum)
				((prime? current) (loop (+ current 2) (+ sum current)))
				(else (loop (+ current 2) sum))))))