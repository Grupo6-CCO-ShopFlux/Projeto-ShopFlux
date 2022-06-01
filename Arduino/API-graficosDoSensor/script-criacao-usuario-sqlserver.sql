CREATE USER [grupo06-1cco]
WITH PASSWORD = '#Shopflux',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter', @membername = N'usuarioParaAPIArduino_datawriter'
