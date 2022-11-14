DROP SCHEMA IF EXISTS Trybesmith;
CREATE SCHEMA IF NOT EXISTS Trybesmith;

CREATE TABLE Trybesmith.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  classe TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Trybesmith.Orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  FOREIGN KEY (userId) REFERENCES Trybesmith.Users (id)
);

CREATE TABLE Trybesmith.Products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  orderId INTEGER,
  FOREIGN KEY (orderId) REFERENCES Trybesmith.Orders (id)
);

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("antaro", "Mago", 30, "1dragonlord");

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("cailin", "Guerreio", 10, "salveorei");

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("suzzene", "Fae", 50, "lilith123");

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("gorlon", "Caçador", 30, "deersteak");

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("freud", "Médico", 45, "inconsciente");

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("alixia", "Fae", 46, "savegodpa");


INSERT INTO
  Trybesmith.Orders (userId)
VALUES
  (1);

INSERT INTO
  Trybesmith.Orders (userId)
VALUES
  (4);

INSERT INTO
  Trybesmith.Orders (userId)
VALUES
  (2);

INSERT INTO
  Trybesmith.Orders (userId)
VALUES
  (6);

INSERT INTO
  Trybesmith.Products (name, amount)
VALUES
  ("Adaga Mão Esquerda", "100 peças de ouro");

INSERT INTO
  Trybesmith.Products (name, amount, orderId)
VALUES
  (
    "Cutelo",
    "20 peças de ouro",
    2
  );

INSERT INTO
  Trybesmith.Products (name, amount, orderId)
VALUES
  ("Morningstar", "50 peças de ouro", 2);

INSERT INTO
  Trybesmith.Products (name, amount, orderId)
VALUES
  ("Percemaille", "55 peças de ouro", 2);

INSERT INTO
  Trybesmith.Products (name, amount, orderId)
VALUES
  ("Cajado de três círculos feito de galena e quartzo", "150 peças de ouro", 4);
