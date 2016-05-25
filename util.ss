; This is a utilities file for all the general purpose helper functions I write.

; Identifies if a number is prime.
(define prime?
	(lambda (n)
		(let loop ([current 2])
			(cond
				((> current (sqrt n)) #t)
				((= 0 (mod n current)) #f)
				(else (loop (+ current 1)))))))

(define number-of-factors
	(lambda (n)
		(let loop ([current 1] [count 0])
			(cond
				((>= current (floor (sqrt n))) (if (= 0 (mod n (sqrt n)))
													(+ 1 (* count 2))
													(* count 2)))
				((= 0 (mod n current)) (loop (+ current 1) (+ count 1)))
				(else (loop (+ current 1) count))))))

(define digit-sum
	(lambda (n)
		(apply + (map string->number (map (lambda (item) (make-string 1 item)) (string->list (number->string n)))))))