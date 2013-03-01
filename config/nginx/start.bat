@ECHO off
SETLOCAL

FOR /F "tokens=*" %%i in ('type run.properties') do (SET %%i)

START cmd.exe /K node-start.bat /directory %content.lib%
START cmd.exe /K node-start.bat /directory %product.designer%
START cmd.exe /K nginx-start.bat /server %nginx.server% /config %nginx.conf%

ENDLOCAL







