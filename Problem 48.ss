; Problem 48

(define self-powers
	(lambda ()
		(let loop ([current 1] [sum 0])
				(if (> current 1000)
					sum
					(loop (+ current 1) (+ sum (expt current current)))))))