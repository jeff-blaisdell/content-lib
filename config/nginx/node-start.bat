IF "%1" == "/directory" (
	SET directory=%2
)
CD %directory%
supervisor app.js