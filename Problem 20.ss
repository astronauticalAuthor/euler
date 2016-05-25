(define digit-sum
	(lambda (n)
		(apply + (map string->number (map (lambda (item) (make-string 1 item)) (string->list (number->string n)))))))

(define factorial-digit-sum
	(lambda ()
		(digit-sum (let loop ([current 100] [product 1])
			(if (= current 1)
				product
				(loop (- current 1) (* product current)))))




		))