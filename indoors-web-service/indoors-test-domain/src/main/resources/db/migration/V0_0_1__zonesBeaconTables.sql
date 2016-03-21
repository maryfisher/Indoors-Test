------------------------------------------------------------------
------------------------- SHARED OBJECTS -------------------------
ALTER SCHEMA indoors
OWNER TO ${dbowner};


------------------------------------------------------------------
---------------------- AUTHORISATION TABLES ----------------------
CREATE TABLE indoors.beacon (
  id                SERIAL PRIMARY KEY NOT NULL,
  name              VARCHAR(64),
  description       TEXT,
  vendor            VARCHAR(32),
  uuid              VARCHAR(37),
  major             INTEGER,
  minor             INTEGER,
  tx_power          INTEGER,
  installation_date TIMESTAMP,
  lat               INTEGER,
  lng               INTEGER
);

ALTER TABLE indoors.beacon OWNER TO ${dbowner};
CREATE TABLE indoors.zone (
  id             SERIAL PRIMARY KEY NOT NULL,
  name           VARCHAR(64),
  description    TEXT,
  beacon_id         INTEGER UNIQUE REFERENCES indoors.beacon,
  size           VARCHAR(32)

);
ALTER TABLE indoors.zone OWNER TO ${dbowner};