(define proper-divisors
	(lambda (n)
		(let loop ([current 1] [divisors '()])
			(cond
				((> current (/ n 2)) divisors)
				((= 0 (mod n current)) (loop (+ current 1) (cons current divisors)))
				(else (loop (+ current 1) divisors))))))

(define is-amicable?
	(lambda (n)
		(and (not (equal? n (apply + (proper-divisors n)))) (equal? n (apply + (proper-divisors (apply + (proper-divisors n))))))))

(define amicable-numbers
	(lambda ()
		(let loop ([current 1] [sum 0])
			(cond
				((>= current 10000) sum)
				((is-amicable? current) (begin (display current) (newline) (loop (+ current 1) (+ sum current))))
				(else (loop (+ current 1) sum))))))