IF "%1" == "/server" (
	SET server=%2
)

IF "%3" == "/config" (
	SET config=%4
)

cd %server%
nginx -c %config%