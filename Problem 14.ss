(define collatz
	(lambda (n count)
		(cond
			((= n 1) count)
			((= 1 (mod n 2)) (collatz (+ 1 (* 3 n)) (+ count 1)))
			(else (collatz (/ n 2) (+ count 1))))))


(define longest-collatz-sequence
	(lambda ()
		(let loop ([current 2] [longest 0] [chainlength 0])
			(display current)
			(newline)

			(let ([length (collatz current 0)])
				(cond
					((>= current 1000000) longest)
					((> length chainlength) (loop (+ current 1) current length))
					(else (loop (+ current 1) longest chainlength)))))))