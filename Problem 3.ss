; Problem 3

(define prime?
	(lambda (n)
		(let loop ([current 2])
			(cond
				((> current (sqrt n)) #t)
				((= 0 (mod n current)) #f)
				(else (loop (+ current 1)))))))


(define largest-prime-factor
	(lambda ()
		(let loop ([current 3] [largest 0] [limit 775146])
			(cond
				((> current limit) largest)
				((and (prime? current) (> current largest) (= 0 (mod 600851475143 current))) (loop (+ current 2) current limit))
				(else (loop (+ current 2) largest limit))))))