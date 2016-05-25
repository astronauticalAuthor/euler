; Problem 7

(define prime?
	(lambda (n)
		(let loop ([current 2])
			(cond
				((> current (sqrt n)) #t)
				((= 0 (mod n current)) #f)
				(else (loop (+ current 1)))))))

(define 10001st-prime
	(lambda ()
		(let loop ([current 15] [primecount 6] [lastprime 0])
			(cond
				((= primecount 10001) lastprime)
				((prime? current) (loop (+ current 2) (+ primecount 1) current))
				(else (loop (+ current 2) primecount lastprime))))))