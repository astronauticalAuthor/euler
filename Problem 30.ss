(define power-sum
	(lambda (n)
		(apply + (map (lambda (item) (expt item 5)) (map string->number (map (lambda (item) (make-string 1 item)) (string->list (number->string n))))))))

(define digit-fifth-powers
	(lambda ()
		(let loop ([count 2] [sum 0])
			(cond
				((= count 10000000) sum)
				((= count (power-sum count)) (loop (+ count 1) (+ sum count)))
				(else (loop (+ count 1) sum))))))