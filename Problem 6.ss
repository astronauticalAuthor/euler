; Problem 6

(define sum-square-difference
	(lambda ()
		(- (let loop ([current 1] [sum 0])
				(if (= current 101)
					sum
					(loop (+ current 1) (+ sum (* current current)))))
			(let loop ([current 1] [sum 0])
				(if (= current 101)
					(* sum sum)
					(loop (+ current 1) (+ sum current)))))))