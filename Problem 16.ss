(define power-digit-sum
	(lambda ()
		(apply + (map string->number (map (lambda (item) (make-string 1 item)) (string->list (number->string (expt 2 1000))))))))