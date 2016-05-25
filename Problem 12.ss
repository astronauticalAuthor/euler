; Problem 12

(define number-of-factors
	(lambda (n)
		(let loop ([current 1] [count 0])
			(cond
				((>= current (floor (sqrt n))) (if (= 0 (mod n (sqrt n)))
													(+ 1 (* count 2))
													(* count 2)))
				((= 0 (mod n current)) (loop (+ current 1) (+ count 1)))
				(else (loop (+ current 1) count))))))

(define highly-divisible-triangular-number
	(lambda ()
		(let loop ([count 2] [current 1])
			(display count)
			(newline)
			(if (> (number-of-factors current) 500)
				current
				(loop (+ count 1) (+ current count))))))