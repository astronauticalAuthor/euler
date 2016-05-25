; Problem 1

(define multiples-of-3-or-5
	(lambda ()
		(let loop ([current 1] [limit 1000])
			(cond
				((>= current limit) 0)
				((or (= 0 (mod current 3)) (= 0 (mod current 5))) (+ current (loop (+ current 1) limit)))
				(else (loop (+ current 1) limit))))))