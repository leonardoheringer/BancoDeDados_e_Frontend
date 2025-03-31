CREATE DATABASE DigiBank_teste;
USE DigiBank_teste;
CREATE TABLE Pessoas (
    PessoaID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    CPF VARCHAR(11) NOT NULL UNIQUE,
    Senha VARCHAR(50) NOT NULL
);

CREATE TABLE Contas (
    ContaID INT AUTO_INCREMENT PRIMARY KEY,
    NumeroConta VARCHAR(20) NOT NULL UNIQUE,
    Saldo DECIMAL(10, 2) NOT NULL DEFAULT 0,
    Agencia VARCHAR(20) NOT NULL,
    CodigoBanco VARCHAR(5) NOT NULL,
    PessoaID INT,
    FOREIGN KEY (PessoaID) REFERENCES Pessoas(PessoaID)
);

CREATE TABLE Extrato (
    ExtratoID INT AUTO_INCREMENT PRIMARY KEY,
    ContaID INT,
    TipoTransacao VARCHAR(20),  -- 'Deposito' ou 'Saque'
    Valor DECIMAL(10, 2),
    DataTransacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ContaID) REFERENCES Contas(ContaID)
);

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE Extrato;
TRUNCATE TABLE Contas;
TRUNCATE TABLE Pessoas;

SET FOREIGN_KEY_CHECKS = 1;



SELECT * FROM pessoas;
DESCRIBE Pessoas;
SHOW VARIABLES LIKE 'max_connections';
ALTER TABLE Contas MODIFY COLUMN CodigoBanco INT DEFAULT 0; -- Ou algum valor padrão

DESCRIBE Contas;
DELETE FROM Extrato;
TRUNCATE TABLE Extrato;

DESCRIBE Contas;









CREATE TABLE Pessoas (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255),
    CPF VARCHAR(14) UNIQUE,
    Senha VARCHAR(255)
);



CREATE TABLE Contas (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    NumeroAgencia VARCHAR(10),
    NumeroConta VARCHAR(20),
    Saldo DOUBLE,
    PessoaId INT,
    FOREIGN KEY (PessoaId) REFERENCES Pessoas(Id)
);



CREATE TABLE Extratos (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Data DATETIME,
    Descricao VARCHAR(255),
    Valor DOUBLE,
    ContaId INT,
    FOREIGN KEY (ContaId) REFERENCES Contas(Id)
);
show databases;
USE digiBank;
show tables; 
show databases;

SELECT * FROM Pessoas;